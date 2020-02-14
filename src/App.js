import React from "react";
import Lux from "@lespantsfancy/lux";

export default class App extends Lux.React.ReactorComponent {
    componentDidMount() {
        super.componentDidMount();
        
        // this.context.attach("Astro", {});
        // this.e("Astro").$prop("astronauts", "http://api.open-notify.org/astros.json");

        this.context.attach("Cats", {});
        this.e("Cats").prop("fish", 5);

        this.forceUpdate();
    }

    render() {
        return (
            <div>
                <pre>
                    { Lux.Core.Helper.StringifyCyclic(this.$$("Cats"), 2) }
                </pre>
            </div>
        );
    }
};