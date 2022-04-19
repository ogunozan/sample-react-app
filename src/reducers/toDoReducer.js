import { toDoConstant } from "../constants";

const initialState = {
    toDos: {
        data: null,
        isLoading: false
    },
    addedToDo: {
        data: null,
        isLoading: false
    },
    buttonText: "ekle",
    selectedToDo: null
};

export function toDoReducer(state = initialState, action) {

    switch (action.type) {

        case toDoConstant.GET_ALL_REQUEST:
            return {
                ...state,
                toDos: {
                    data: null,
                    isLoading: true
                }
            }

        case toDoConstant.GET_ALL_SUCCESS:
            return {
                ...state,
                toDos: {
                    data: action.payload,
                    isLoading: false
                }
            }

        case toDoConstant.GET_ALL_FAIL:
            return {
                ...state,
                toDos: {
                    data: null,
                    isLoading: false
                }
            }

        case toDoConstant.ADD_REQUEST:
            return {
                ...state,
                addedToDo: {
                    data: null,
                    isLoading: true
                }
            }

        case toDoConstant.ADD_SUCCESS:
            return {
                ...state,
                addedToDo: {
                    data: action.payload,
                    isLoading: false
                },
                toDos: {
                    ...state.toDos,
                    data: [...state.toDos.data, action.payload],
                }
            }

        case toDoConstant.ADD_FAIL:
            return {
                ...state,
                addedToDo: {
                    data: null,
                    isLoading: false
                }
            }

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