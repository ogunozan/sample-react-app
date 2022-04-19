import { toDoConstant } from "../constants";
import { toDoService } from "../services/toDoService";

const getAll = () => {

    return dispatch => {

        dispatch(request());

        toDoService.getAll().
            then(response =>{

                dispatch(success(response))
            }). 
            catch(ex => {
                
                dispatch(fail());

                alert("yapılacak listesi getirilemdi");
            })
    }

    function request() { return { type: toDoConstant.GET_ALL_REQUEST } }

    function success(data) { return { type: toDoConstant.GET_ALL_SUCCESS, payload: data } }

    function fail() { return { type: toDoConstant.GET_ALL_FAIL } }
}

const add = (toDo) => {

    return dispatch => {

        dispatch(request());

        toDoService.add(toDo).
            then(response =>{

                dispatch(success(response))
            }). 
            catch(ex => {
                
                dispatch(fail());

                alert("yapılacak eklenemedi");
            })
    }

    function request() { return { type: toDoConstant.ADD_REQUEST } }

    function success(data) { return { type: toDoConstant.ADD_SUCCESS, payload: data } }

    function fail() { return { type: toDoConstant.ADD_FAIL } }
}

const update = (toDo) => { return { type: toDoConstant.UPDATE, payload: toDo } };

const remove = (id) => { return { type: toDoConstant.REMOVE, payload: id } };

const select = (toDo) => { return { type: toDoConstant.SELECT, payload: toDo } };

const setButtonText = (text) => { return { type: toDoConstant.SET_BUTTON_TEXT, payload: text } };

export const toDoAction = {
    getAll,
    add,
    update,
    remove,
    select,
    setButtonText
}

export default toDoAction;