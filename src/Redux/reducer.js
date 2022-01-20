import { ADD_TODO, DELETE_TODO, TOGGLE_TODO } from "./actionType";

const initState = {
  todo: []
};
export const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case ADD_TODO:
      return {
        ...state,
        todo: [...state.todo, payload]
      };

    case TOGGLE_TODO:
      return {
        ...state,
        todo: state.todo.map((item) =>
          item.title === payload ? { ...item, status: !item.status } : item
        )
      };

    case DELETE_TODO:
      return {
        ...state,
        todo: state.todo.filter((item) => item.title !== payload)
      };

    default:
      return state;
  }
};
