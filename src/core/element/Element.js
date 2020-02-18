import Lux from "@lespantsfancy/lux";

import Enum from "./../enum/package";

export default class Element extends Lux.Node.Struct {
    constructor(name, type, order, {
        value = [],
        defaultValue = null,
        children = [],
        validators = {},
        state = Lux.Core.Helper.Bitmask.Add(2,
            Enum.State.ACTIVE,
            Enum.State.VISIBLE,
            // Enum.State.REQUIRED,
            Enum.State.WRITABLE
        ),
        meta = {},
        label = null,
        description = null,
        regex = null
    } = {}) {
        super({
            Name: name,
            Type: type,
            Order: order,

            Value: Array.isArray(value) ? value : [ value ],    // All values will be stored here, so should always be Array
            DefaultValue: defaultValue,     // If this is a function, assign by DefaultValue(Value)

            Children: children,
            State: state,

            Label: label || name,
            Description: description,

            Meta: meta,
            RegEx: regex
        }, { validators });
    }

    GetDisplay() {
        return [
            this.Name,
            this.Label,
            this.Description,
            this.Type,
            this.Meta.Variant || null,
            this.UUID()
        ];
    }

    GetType(asString = false) {
        if(asString) {
            for(let name in Enum.Type) {
                if(Enum.Type[ name ] === this.Type) {
                    return name.toUpperCase();
                }
            }

            return false;   // Realistically this shouldn't ever happen without an error being present in the data
        }

        return this.Type;
    }

    GetVariant() {
        return this.Meta.Variant || false;
    }
    SetVariant(type) {
        if(typeof type === "number") {
            this.Meta.Variant = type;
        }

        return this;
    }
    HasVariant(type) {
        return this.Meta.Variant === type;
    }

    GetChildren(...indexOrName) {
        if(indexOrName.length) {
            let children = [],
                childrenKeys = [];

            let childrenObj = this.Children.reduce((a, v) => {
                childrenKeys.push(v.Name);

                return {
                    ...a,
                    [ v.Name ]: v
                }
            }, {});

            for(let key of indexOrName) {
                if(typeof key === "number") {
                    children.push(this.Children[ key ]);
                } else if(typeof key === "string" || key instanceof String) {
                    if(key in childrenKeys) {
                        children.push(childrenObj[ key ]);
                    }
                }
            }

            return children;
        }

        return this.Children;
    }

    GetChild(indexOrName) {
        if(typeof indexOrName === "number") {
            return this.Children[ indexOrName ];
        } else if(typeof indexOrName === "string" || indexOrName instanceof String) {
            let child;

            this.Children.forEach((v, i) => {
                if(v.Name === indexOrName) {
                    return child = this.Children[ i ];
                }
            });

            return child;
        }

        return false;
    }
    AddChild(child) {
        if(child instanceof Element) {
            this.Children.push(child);
        }

        return this;
    }
    RemoveChild(indexOrName) {
        if(typeof indexOrName === "number") {
            this.Children.splice(indexOrName, 1);

            return true;
        } else if(typeof indexOrName === "string" || indexOrName instanceof String) {
            this.Children.forEach((v, i) => {
                if(v.Name === indexOrName) {
                    this.Children.splice(i, 1);

                    return true;
                }
            })
        }

        return false;
    }

    GetValue(index = null) {
        if(typeof index === "number") {
            return this.Value[ index ];
        }

        return this.Value;
    }

    _cleanValue(value, removeChars = []) {
        let rmvr = removeChars.reduce((a, v) => a.length ? `${ a }|${ v }` : `${ v }`, "");

        return value.replace(new RegExp(rmvr), "").trim();
    }

    //TODO This has not been tested for RegEx or Event firing
    SetValue(index, value) {
        if(arguments.length === 1) {
            value = index;
            index = 0;
        }

        if(this.RegEx instanceof RegExp) {
            if(!this.RegEx.test(value)) {
                return false;
            }
        }

        let oldValue = Object.freeze(JSON.parse(JSON.stringify(this.Value))),
            newValue = this._cleanValue(value);

        if(index === -1) {
            this.Value.push(newValue);
        } else if(typeof index === "number") {
            this.Value[ index ] = newValue;
        }

        this.broadcast(Lux.Node.Struct.PackageEventChange(this, "Value", this.Value, oldValue));

        return this;
    }
    SetValues(values) {
        if(Array.isArray(values)) {
            this.Value = values.filter(v => {
                if(this.RegEx instanceof RegExp) {
                    return this.RegEx.test(v);
                }

                return true;
            }).map(v => this._cleanValue(v));
        } else if(values === null) {
            this.Value = [];
        }

        return this;
    }

    GetDefaultValue() {
        if(typeof this.DefaultValue === "function") {
            return this.DefaultValue(this.Value);
        }

        return this.DefaultValue;
    }

    /**
     * A helper function for custom Event firing.  This will use #Struct.broadcast(e) to send the packaged Event to all subscribers
     * @param {string} type 
     * @param {any} payload
     */
    Invoke(type, payload) {
        this.broadcast(new Lux.Node.Event(
            type,
            payload,
            this
        ));

        return this;
    }
};