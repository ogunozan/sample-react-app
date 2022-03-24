import React from "react";
import { connect } from "react-redux";

class ToDoListComponent extends React.Component {

    render = () => {

        return (
            <>
                <ul>
                    {this.props.toDos.map(x => <li>{x.text}</li>)}
                </ul>
            </>
        )
    }
}

const mapStateToProps = (state) => {

    const { toDos } = state.toDoReducer;

    return { toDos };
}

export const ToDoList = connect(mapStateToProps, null)(ToDoListComponent);