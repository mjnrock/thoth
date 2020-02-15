import React from "react";
import Lux from "@lespantsfancy/lux";

import Component from "./component/package";

export default class App extends Lux.React.MasterNodeComponent {
    // componentDidMount() {
    //     super.componentDidMount();

    //     this.ep("Test", "Root").GetChild(0).subscribe(this.forceUpdate);
    //     this.ep("Test", "Root").GetChild(1).subscribe(this.forceUpdate);
    //     setTimeout(() => {
    //         this.ep("Test", "Root").GetChild(0).Order = 5;
    //         this.ep("Test", "Root").GetChild(1).Order = 15;
    //     }, 2000);
    // console.log(this.ep("Test", "Root").GetChild(0).Name);
    // console.log(this.context.getEntity("Test").prop("Root").GetChild(0).Name);
    // console.log(Lux.React.Context.MasterNode.getEntity("Test").prop("Root").GetChild(0).Name);
    // }
    render() {
        return (
            <div>
                <Component.Element />
                
                <div className="flex justify-center">
                    <pre className="b ba br2">
                        { Lux.Core.Helper.StringifyCyclic(this.context, 2) }
                    </pre>
                </div>
            </div>
        );
    }
};