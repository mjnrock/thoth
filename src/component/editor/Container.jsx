import React from "react";
import Lux from "@lespantsfancy/lux";

import Core from "../../core/package";
import Editor from "./package";

export default class Container extends Lux.React.ObserverComponent {
    getReactClass(element) {
        switch(element.Type) {
            case Core.Enum.Type.NUMBER:
                return Editor.NumberElement;
            case Core.Enum.Type.TEXT:
                return Editor.TextElement;
            default:
                return Editor.Element;
        }
    }

    render() {
        return (
            <div>
                {
                    this.context.$("GetChildren").map((c, i) => {
                        let Element = this.getReactClass(c);

                        return (
                            <Element key={ i } value={ c } />
                        );
                    })
                }
            </div> 
        );
    }
}