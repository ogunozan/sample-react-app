import React from "react";
import { connect } from "react-redux";

class ToDoHeaderComponent extends React.Component {

    render = () => {

        return (
            <h>yapılacak listesinde {this.props.toDos.length} adet kayıt var</h>
        )
    }
}

const mapStateToProps = (state) => {

    const { toDos } = state.toDoReducer;

    return { toDos };
}


export const ToDoHeader = connect(mapStateToProps, null)(ToDoHeaderComponent);