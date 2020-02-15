import React from "react";
import ReactDOM from "react-dom";

import Lux from "@lespantsfancy/lux";
import Core from "./core/package";

import App from "./App";

//? Use the MasterNode exposure to set the initial state of the Context
Lux.React.Context.MasterNode.attach("Test", {
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

ReactDOM.render(
    <App />,
    document.getElementById("root")
);