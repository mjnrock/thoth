import React from "react";
import Lux from "@lespantsfancy/lux";

import Core from "./core/package";

export default class App extends Lux.React.ReactorComponent {
    componentDidMount() {
        super.componentDidMount();
        
        // this.context.attach("Astro", {});
        // this.e("Astro").$prop("astronauts", "http://api.open-notify.org/astros.json");

        this.context.attach("Test", {
            Root: new Core.Element.Element(
                "root",
                Core.Enum.Type.TEXT,
                0,
                {
                    children: [
                        new Core.Element.Element(
                            "child-1",
                            Core.Enum.TEXT,
                            1
                        ),
                        new Core.Element.Element(
                            "child-2",
                            Core.Enum.TEXT,
                            2
                        )
                    ]
                }
            )
        });
        // this.e("Test").prop("fish", 5);

        this.forceUpdate();
    }

    render() {
        return (
            <div>
                <pre>
                    { Lux.Core.Helper.StringifyCyclic(this.$$("Test"), 2) }
                </pre>
            </div>
        );
    }
};