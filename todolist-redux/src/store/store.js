import { createStore } from "redux";
import todoReducer from "./state/reducers/todoReducers";

const store = createStore(todoReducer);

export default store;
