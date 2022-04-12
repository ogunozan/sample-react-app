import React from "react";
import { connect } from "react-redux";
import { toDoAction } from "../actions";

class ToDoListComponent extends React.Component {

    removeButtonOnClick = (id) => {

        this.props.remove(id);
    }

    selectButtonOnClick = (id) => {

        const selectedToDo = this.props.toDos.find(x => x.id === id);

        this.props.select(selectedToDo);
        
        this.props.setButtonText("güncelle")
    }

    render = () => {

        return (
            <>
                <ul>
                    {this.props.toDos.map(x =>
                        <li>{x.text}
                            <button style={{ margin: 10 }} onClick={() =>
                                this.selectButtonOnClick(x.id)}>seç</button>
                            <button onClick={() =>
                                this.removeButtonOnClick(x.id)}>sil</button>
                        </li>)}
                </ul>
            </>
        )
    }
}

const mapStateToProps = (state) => {

    const { toDos } = state.toDoReducer;

    return { toDos };
}

const mapDispatchFromProps = (dispatch) => {

    return {
        select: (item) => dispatch(toDoAction.select(item)),
        setButtonText: (text) => dispatch(toDoAction.setButtonText(text)),
        remove: (id) => dispatch(toDoAction.remove(id))
    }
}

export const ToDoList = connect(mapStateToProps, mapDispatchFromProps)(ToDoListComponent);