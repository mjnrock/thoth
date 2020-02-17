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

        //?  real-time evaluation (e.g. actively typing)
        this.RegEx = new RegExp("^[0-9]*([,.]{0,1}[0-9]*)?$");
        
        //?  ex-post evaluation (e.g. data submission) | [,.][0-9]+ will always fail in real-time without copy and paste
        // this.RegEx = new RegExp("^[0-9]+([,.][0-9]+)?$");
    }
};