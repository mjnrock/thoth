import React from "react";
import Lux from "@lespantsfancy/lux";

import Core from "./../../core/package";
import Template from "./package";

export default class Container extends Lux.React.ObserverComponent {
    getClassByType(element) {
        switch(element.Type) {
            case Core.Enum.Type.NUMBER:
                return Template.NumberElement;
            case Core.Enum.Type.TEXT:
                return Template.TextElement;
            default:
                return Template.Element;
        }
    }

    render() {
        return (
            <div>
                {
                    this.context.$("GetChildren").map((c, i) => {
                        let Element = this.getClassByType(c);

                        return (
                            <Element key={ i } value={ c } />
                        );
                    })
                }
            </div> 
        );
    }
}