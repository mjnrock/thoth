import Lux from "@lespantsfancy/lux";

import Enum from "./../enum/package";
import Element from "./Element";

export default class Number extends Element {
    constructor(name, order, {
        value = [],
        defaultValue = null,
        validators = {},
        state = Lux.Core.Helper.Bitmask.Add(2,
            Enum.State.ACTIVE,
            Enum.State.VISIBLE,
            // Enum.State.REQUIRED,
            Enum.State.WRITABLE
        ),
        label = null,
        description = null
    } = {}) {
        super(name, Enum.Type.NUMBER, order, {
            value,
            defaultValue,
            validators,
            state,
            label,
            description
        });
    }
};