import React, { Component } from "react";
import Lux from "@lespantsfancy/lux";

import Core from "./../core/package";

export default class Element extends Lux.React.ReactorComponent {
    render() {
        console.log(this.ep("Test", "Root").GetChild(0).Name);
        console.log(this.context.getEntity("Test").prop("Root").GetChild(0).Name);
        console.log(Lux.React.Context.MasterNode.getEntity("Test").prop("Root").GetChild(0).Name);
        
        return (                
            <div>Element Placeholder</div>
        );
    }
}