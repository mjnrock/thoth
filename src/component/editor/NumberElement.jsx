import React from "react";
import Element from "./Element";

export default class NumberElement extends Element {
    constructor(props) {
        super(props);
        
        this.state = {
            ...this.state,
            rowColor: "blue"
        };
    }
}