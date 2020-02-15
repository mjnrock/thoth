import React from "react";
import Lux from "@lespantsfancy/lux";

import Template from "./package";

export default class Container extends Lux.React.ObserverComponent {
    render() {
        return (
            <div>
                {
                    this.context.$("GetChildren").sort((a, b) => a.Order - b.Order).map((c, i) => (
                        <Template.Element key={ i } value={ c } />
                    ))
                }
            </div> 
        );
    }
}