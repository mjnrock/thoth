import React from "react";
import Lux from "@lespantsfancy/lux";

import Component from "./component/package";

export default class App extends Lux.React.ObserverComponent {
    componentDidMount() {
        super.componentDidMount();
        
        let _this = this;
        this.context.addReaction("change", e => {
            _this.context.$("GetChildren").sort((a, b) => a.Order - b.Order);
        });
    }

    render() {
        return (
            <div>
                <Component.Editor.Container />
                
                <div>
                    <pre className="b ba br2">
                        <ul>
                            { this.context.$().GetChildren().map((c, i) => ( <li key={ i }>{ c.UUID() }</li>)) }
                        </ul>
                    </pre>
                    <pre className="b ba br2">
                        { this.context.$().GetChild(0).UUID() }
                    </pre>
                    <pre className="b ba br2">
                        { this.context.$().GetChild(1).UUID() }
                    </pre>
                    <pre className="b ba br2">
                        { this.context.$().GetChild(2).UUID() }
                    </pre>
                    <pre className="b ba br2">
                        { this.context.$().GetChild(3).UUID() }
                    </pre>
                    
                    {/* <pre className="b ba br2">
                        { Lux.Core.Helper.StringifyCyclic(this.context, 2) }
                    </pre> */}
                </div>
            </div>
        );
    }
};