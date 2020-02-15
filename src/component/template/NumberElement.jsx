import React, { Component } from "react";

export default class NumberElement extends Component {
    render() {
        const element = this.props.value;

        return (
            <div className="blue">
                <span>{ element.Name }</span> [ <span>{ element.Order }</span> ] [ <span>{ element.UUID() }</span> ]
            </div> 
        );
    }
}