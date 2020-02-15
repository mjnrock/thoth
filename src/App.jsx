import React from "react";
import Lux from "@lespantsfancy/lux";

import Component from "./component/package";

export default class App extends Lux.React.MasterNodeComponent {
    render() {
        return (
            <div>
                <Component.Template.Container />
                
                <div className="flex justify-center">
                    <pre className="b ba br2">
                        { Lux.Core.Helper.StringifyCyclic(this.context, 2) }
                    </pre>
                </div>
            </div>
        );
    }
};