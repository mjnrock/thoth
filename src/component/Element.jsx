import React from "react";
import Lux from "@lespantsfancy/lux";

// import Core from "./../core/package";

export default class Element extends Lux.React.ObserverComponent {
    render() {
        console.log(this.context._subject.GetChildren());
        
        return (               
            <div>
                { this.context._subject.GetChildren().map((c, i) => (
                    <div key={ i }>
                        <p>{ c.Name }</p>
                        <p>{ c.UUID() }</p>
                    </div>
                ))}
            </div> 
        );
    }
}