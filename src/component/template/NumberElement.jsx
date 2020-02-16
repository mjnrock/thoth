import React from "react";
import Element from "./Element";

export default class NumberElement extends Element {
    constructor(props) {
        super(props);
        
        this.state = {
            rowColor: "blue"
        };
    }

    //? This is really meant to show some different ways you can play with overriding behavior
    defaultDisplay() {
        const element = this.props.value;

        return (
            <div className={ this.state.rowColor }>
                <span>{ element.Name }</span> [ <span>{ element.Order }</span> ] [ <span>{ element.UUID() }</span> ]
                <p>{ element.Type }</p>
            </div> 
        );
    }
}