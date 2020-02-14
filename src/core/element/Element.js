import Lux from "@lespantsfancy/lux";

import EnumState from "../enum/State";

export default class Element extends Lux.Node.Struct {
    constructor(name, type, order, {
        value = [],
        defaultValue = null,
        children = [],
        validators = {},
        state = Lux.Core.Helper.Bitmask.Add(2,
            EnumState.ACTIVE,
            EnumState.VISIBLE,
            // EnumState.REQUIRED,
            EnumState.WRITABLE
        ),
        meta = {},
        label = null,
        description = null
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

            Meta: meta
        }, validators);

        //TODO Create a ".register(Array<Struct>)" in Struct to allow for bubbling in this special list case
    }
};