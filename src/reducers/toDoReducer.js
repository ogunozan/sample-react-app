import { toDoConstant } from "../constans";

const initialState = { toDos: [] };

export function toDoReducer(state = initialState, action) {

    switch (action.type) {
        case toDoConstant.ADD:
            return {
                ...state, ...{ toDos: [...state.toDos, action.payload] }
            }
        default:
            return state;
    }

}

export default toDoReducer;