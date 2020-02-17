import React, { Component } from "react";

export default class Element extends Component {
    constructor(props) {
        super(props);
        
        this.refInput = React.createRef();
        this.refButton = React.createRef();
    }

    btnClick(e) {
        console.log(this.props.value.Value);
    }

    onChange(e) {
        this.props.value.SetValue(e.target.value);
    }

    render() {
        return (
            <div>
                <input
                    ref={ input => this.refInput = input }
                    type={ this.props.type || "text" }
                    value={ this.props.value.Value }
                    onChange={ (this.props.onChange || this.onChange).bind(this) }
                />
                <button
                    className={ this.state.rowColor }
                    ref={ btn => this.refButton = btn }
                    onClick={ this.btnClick.bind(this) }
                >Log</button>
            </div>
        );
    }
}