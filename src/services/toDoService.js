import { requestTool } from "../tools";

const API_URL = "https://localhost:7057";

const getAll = () => requestTool.get(API_URL + "/todo");

const add = (toDo) => requestTool.post(API_URL + "/todo", toDo);

export const toDoService = {
    getAll,
    add
}