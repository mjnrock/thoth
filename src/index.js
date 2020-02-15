import React from "react";
import ReactDOM from "react-dom";

import Lux from "@lespantsfancy/lux";
import Core from "./core/package";

import App from "./App";

//? Use the MasterNode exposure to set the initial state of the Context
//TODO Event bubbling is not present here
    //* Ensure any <Struct> in a <Node> invokes the Node's .next()
    //* Ensure any <Struct> within a <Struct> bubbles to the parent Struct, to eventually bubble to Node
//TODO Perhaps make an <Observer> whose sole purpose is to maintain awareness of children<Struct> (i.e. something between a Struct and  Node)
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