import React from "react";
import ReactDOM from "react-dom";

import Lux from "@lespantsfancy/lux";
import Core from "./core/package";

import App from "./App";

//TODO Make an <Observer> whose sole purpose is to maintain awareness of children<Struct> (i.e. something between a Struct and  Node)
    //* Allow <Observer> to be able to readily grab ANY Struct within its descendency (i.e. act like a Registry) | .Name should be unique, perhaps allow a Name/UUID lookup via a maintained registry
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
Lux.React.Context.Observer.setSubject(new Core.Element.Element(
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
));

setTimeout(() => {
    Lux.React.Context.Observer._subject.GetChild(0).Order = 19;
}, 1000);

ReactDOM.render(
    <App />,
    document.getElementById("root")
);