import React, { Component } from "react";

export default class Element extends Component {
    //? This is really meant to show some different ways you can play with inheritence
    defaultDisplay() {
        const element = this.props.value;

        return (
            <div className={ this.state.rowColor }>
                <span>{ element.Name }</span> [ <span>{ element.Order }</span> ] [ <span>{ element.UUID() }</span> ]
            </div> 
        );
    }

    render() {
        return this.defaultDisplay();
    }
}