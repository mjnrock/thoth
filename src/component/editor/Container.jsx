import React from "react";
import Lux from "@lespantsfancy/lux";

import Core from "../../core/package";
import Editor from "./package";

import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

export default class Container extends Lux.React.ObserverComponent {
    getReactClass = element => {
        switch (element.Type) {
            case Core.Enum.Type.NUMBER:
                return Editor.NumberElement;
            case Core.Enum.Type.TEXT:
                return Editor.TextElement;
            default:
                return Editor.Element;
        }
    }

    onDragEnd = result => {
        const { source, destination } = result;

        // dropped outside the list
        if (!destination) {
            return;
        }

        if(source.droppableId === destination.droppableId) {
            // reorder
            let elements = Array.from(this.context.$("GetChildren"));
            let [ removed ] = elements.splice(source.index, 1);
            elements.splice(destination.index, 0, removed);

            elements.forEach((ele, i) => ele.Order = i);
        }
    };

    render() {
        return (
            <div>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <DragDropContext onDragEnd={this.onDragEnd.bind(this)}>
                        <Droppable droppableId={ this.context.$().UUID() }>
                            {(provided, snapshot) => (
                                <div
                                    ref={provided.innerRef}
                                    {...provided.droppableProps}
                                    className="b ba br2 pa3"
                                    style={{ minHeight: "100px", minWidth: "100px" }}
                                >
                                    {this.context.$("GetChildren").map((ele, i) => {
                                        let Element = this.getReactClass(ele);
                                        
                                        return (
                                            <Draggable key={ ele.UUID() } index={ i } draggableId={ ele.UUID() }>
                                                {(provided, snapshot) => (
                                                    <div                                                    
                                                        
                                                        ref={provided.innerRef}
                                                        {...provided.draggableProps}
                                                        {...provided.dragHandleProps}
                                                        className="b ba br2 pa3 mb2"
                                                    >
                                                        <Element
                                                            key={ ele.UUID() }
                                                            value={ ele }
                                                        />
                                                    </div>
                                                )}
                                            </Draggable>
                                        );
                                    })}
                                </div>
                            )}
                        </Droppable>
                    </DragDropContext>
                </div>
            </div>
        );
    }

    //* The <Droppable droppableId> is what the @source and @destination objects will expose on a drag event
}