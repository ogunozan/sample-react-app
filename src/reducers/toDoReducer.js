import { toDoConstant } from "../constants";

const initialState = {
    toDos: [{ id: 123, text: "deneme" }, { id: 1234, text: "deneme2" }],
    buttonText: "ekle",
    selectedToDo: null
};

export function toDoReducer(state = initialState, action) {

    switch (action.type) {
        case toDoConstant.ADD:
            return {
                ...state, ...{ toDos: [...state.toDos, action.payload] }
            }
        case toDoConstant.UPDATE:
            return {
                ...state,
                ...{
                    toDos: [
                        ...state.toDos.map(x => x.id !== action.payload.id ?
                            x :
                            { ...x, ...action.payload })]
                }
            }
        case toDoConstant.REMOVE:
            return {
                ...state, ...{ toDos: [...state.toDos.filter(x => x.id !== action.payload)] }
            }
        case toDoConstant.SET_BUTTON_TEXT:
            return {
                ...state, buttonText: action.payload
            }
        case toDoConstant.SELECT:
            return {
                ...state, selectedToDo: action.payload
            }
        default:
            return state;
    }

}

export default toDoReducer;