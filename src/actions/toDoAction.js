import { toDoConstant } from "../constants";

const add = (toDo) => { return { type: toDoConstant.ADD, payload: toDo } };

export const toDoAction = {
    add
}

export default toDoAction;