import React from "react";
import { connect } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import toDoAction from "../actions/toDoAction";
import LoadingPanel from "./LoadingPanel";

class ToDoFormComponent extends React.Component {

    state = { text: "", selectedToDo: {} }

    handleOnChange = (e) => {

        const { name, value } = e.target;

        this.setState({ [name]: value });
    }

    static getDerivedStateFromProps = (props, state) => {

        const { selectedToDo } = props;

        if (selectedToDo && state.selectedToDo.text !== selectedToDo.text) {

            //this.setState({text: selectedToDo.text})
            // state için
            return { text: selectedToDo.text, selectedToDo }
        }

        // state değişikliği yok
        return null;
    }

    buttonOnClick = () => {

        if (!this.props.selectedToDo) {

            let newToDo = {
                text: this.state.text,
                id: uuidv4()
            };

            this.props.add(newToDo);
        }
        else {

            this.props.update({ ...this.props.selectedToDo, ...{ text: this.state.text } })
        }

        this.reset();
    }

    reset = () => {

        this.props.select(null);

        this.props.setButtonText("ekle");

        this.setState({ text: "", selectedToDo: {} });
    }

    render = () => {

        if (this.props.addedToDo.isLoading) {
            
            return <LoadingPanel />
        }

        const { buttonText, selectedToDo } = this.props;

        const { text } = this.state;

        return (
            <>
                <input type="text"
                    name="text"
                    onChange={this.handleOnChange}
                    value={text} />
                <br></br>
                <button onClick={this.buttonOnClick}>{buttonText}</button>
                {
                    selectedToDo &&
                    <>
                        <br></br>
                        <button onClick={this.reset}>iptal</button>
                    </>
                }
            </>
        )
    }
}

const mapStateToProps = (state) => {

    const { buttonText, selectedToDo, addedToDo } = state.toDoReducer;

    return { buttonText, selectedToDo, addedToDo }
}

const mapDispatchFromProps = (dispatch) => {

    return {
        add: (toDo) => dispatch(toDoAction.add(toDo)),
        update: (toDo) => dispatch(toDoAction.update(toDo)),
        select: (item) => dispatch(toDoAction.select(item)),
        setButtonText: (text) => dispatch(toDoAction.setButtonText(text)),
    }
}

export const ToDoForm = connect(mapStateToProps, mapDispatchFromProps)(ToDoFormComponent);