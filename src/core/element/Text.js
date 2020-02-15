import Lux from "@lespantsfancy/lux";

import EnumType from "./../enum/Type";
import Element from "./Element";

export default class Text extends Element {
    constructor(name, order, {
        value = [],
        defaultValue = null,
        validators = {},
        state = Lux.Core.Helper.Bitmask.Add(2,
            EnumState.ACTIVE,
            EnumState.VISIBLE,
            // EnumState.REQUIRED,
            EnumState.WRITABLE
        ),
        label = null,
        description = null
    } = {}) {
        super(name, EnumType.TEXT, order, {
            value,
            defaultValue,
            validators,
            state,
            label,
            description
        });
    }
};