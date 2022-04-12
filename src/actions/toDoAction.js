import { toDoConstant } from "../constants";

const add = (toDo) => { return { type: toDoConstant.ADD, payload: toDo } };

const update = (toDo) => { return { type: toDoConstant.UPDATE, payload: toDo } };

const remove = (id) => { return { type: toDoConstant.REMOVE, payload: id } };

const select = (toDo) => { return { type: toDoConstant.SELECT, payload: toDo } };

const setButtonText = (text) => { return { type: toDoConstant.SET_BUTTON_TEXT, payload: text } };

export const toDoAction = {
    add,
    update,
    remove,
    select,
    setButtonText
}

export default toDoAction;