import React from "react";
import { connect } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import toDoAction from "../actions/toDoAction";

class ToDoFormComponent extends React.Component {

    state = { text: "" }

    handleOnChange = (e) => {

        const { name, value } = e.target;

        this.setState({ [name]: value });
    }

    buttonOnClick = () => {

        let newToDo = {
            text: this.state.text,
            id: uuidv4()
        };

        this.props.add(newToDo);
    }

    render = () => {

        return (
            <>
                <input type="text"
                    name="text"
                    onChange={this.handleOnChange}
                    value={this.state.text} />
                <button onClick={this.buttonOnClick}>ekle</button>
            </>
        )
    }
}

const mapDispatchFromProps = (dispatch) => {

    return {
        add: (toDo) => dispatch(toDoAction.add(toDo))
    }
}

export const ToDoForm = connect(null, mapDispatchFromProps)(ToDoFormComponent);