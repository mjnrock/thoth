import React, { Component } from "react";

export default class Element extends Component {
    render() {
        const element = this.props.value;

        return (
            <div>
                <span>{ element.Name }</span> [ <span>{ element.Order }</span> ] [ <span>{ element.UUID() }</span> ]
            </div> 
        );
    }
}