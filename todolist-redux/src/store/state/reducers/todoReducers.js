import {
  ADD_TODO,
  TOGGLE_MOVE_TO_TRASH_TODO,
  PERMANENT_DELETE_TODO,
  COMPELETION_STATUS_TODO,
  UPDATE_TODO,
} from "../actions/todoActions";

const initialState = { data: [] };

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        data: [
          ...state.data,
          {
            id: action.id,
            text: action.text,
            completed: false,
            trashed: false,
          },
        ],
      };

    case TOGGLE_MOVE_TO_TRASH_TODO:
      return {
        data: state.data.map((todo) =>
          todo.id === action.id ? { ...todo, trashed: !todo.trashed } : todo
        ),
      };

    case PERMANENT_DELETE_TODO:
      return {
        data: state.data.filter((item, index) => item.id !== action.id),
      };

    case COMPELETION_STATUS_TODO:
      return {
        data: state.data.map((todo) =>
          todo.id === action.id
            ? { ...todo, completed: action.completed }
            : todo
        ),
      };

    case UPDATE_TODO:
      return {
        data: state.data.map((todo) =>
          todo.id === action.id ? { ...todo, text: action.text } : todo
        ),
      };

    default:
      return state;
  }
};

export default todoReducer;
