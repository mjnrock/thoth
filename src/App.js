import React from "react";
import Lux from "@lespantsfancy/lux";

let seen = [];
let cyclic = (key, val) => {
    if (val != null && typeof val == "object") {
        if (seen.indexOf(val) >= 0) {
            return;
        }
        seen.push(val);
    }
    return val;
};

export default class App extends Lux.React.ReactorComponent {
    componentDidMount() {
        let node = new Lux.Node.Node({
            Fish: 1
        });
        this.context.attach("Cat", node);

        console.log(1111);
        setInterval(() => {
            this.context.getEntity("Cat").prop("Fish", this.$("Cat").Fish + 1);
            this.forceUpdate();
        }, 1000);
    }

    render() {
        return (
            <div>
                <pre>
                    {JSON.stringify(this.context, cyclic, 2)}
                </pre>
                {/* <div>
                    {JSON.stringify(this.context)}
                </div> */}
            </div>
        );
    }
};