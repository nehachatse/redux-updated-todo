import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from "./actionType";

export const addTodo = (payload) => ({
  type: ADD_TODO,
  payload: {
    title: payload,
    status: false
  }
});

export const toggleTodo = (payload) => ({
  type: TOGGLE_TODO,
  payload
});

export const deleteTodo = (payload) => ({
  type: DELETE_TODO,
  payload
});
