import React, { Component } from "react";

export default class TextElement extends Component {
    render() {
        const element = this.props.value;

        return (
            <div className="green">
                <span>{ element.Name }</span> [ <span>{ element.Order }</span> ] [ <span>{ element.UUID() }</span> ]
            </div> 
        );
    }
}