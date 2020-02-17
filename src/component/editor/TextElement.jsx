// eslint-disable-next-line
import React from "react";

import Element from "./Element";

export default class TextElement extends Element {
    constructor(props) {
        super(props);
        
        this.state = {
            ...this.state,
            rowColor: "green"
        };
    }
}