import TodoInput from "./TodoInput";
import { AppContext } from "../Redux/AppContextProvider";
import React from "react";
import TodoItems from "./TodoItems";

export default function Todo() {
  const { dispatch, getState } = React.useContext(AppContext);

  const data = getState().todo;

  return (
    <>
      <TodoInput />
      {data.map((item, index) => (
        <TodoItems task={item} key={index} />
      ))}
    </>
  );
}
