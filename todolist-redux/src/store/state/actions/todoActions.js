import { uuid } from "../../../utilities/utils.js";

export const ADD_TODO = "ADD_TODO";
export const TOGGLE_MOVE_TO_TRASH_TODO = "TOGGLE_MOVE_TO_TRASH_TODO";
export const PERMANENT_DELETE_TODO = "PERMANENT_DELETE_TODO";
export const COMPELETION_STATUS_TODO = "COMPELETION_STATUS_TODO";
export const UPDATE_TODO = "UPDATE_TODO";

export const addTodo = (text) => ({
  type: ADD_TODO,
  id: uuid(),
  text,
});

export const completionStatus = (id, status) => ({
  type: COMPELETION_STATUS_TODO,
  id: id,
  completed: status,
});

export const toggleMoveToTrash = (id) => ({
  type: TOGGLE_MOVE_TO_TRASH_TODO,
  id: id,
});

export const permanentDelete = (id) => ({
  type: PERMANENT_DELETE_TODO,
  id,
});
export const updateTodo = (id, text) => ({
  type: UPDATE_TODO,
  id,
  text,
});
