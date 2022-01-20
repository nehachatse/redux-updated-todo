import React from "react";
import { addTodo } from "../Redux/action";
import { AppContext } from "../Redux/AppContextProvider";
import styles from "./TodoInput.module.css";

export default function TodoInput() {
  const [value, setValue] = React.useState("");
  const { dispatch, getState } = React.useContext(AppContext);

  const handleInput = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = () => {
    console.log("todo", getState(), value);
    dispatch(addTodo(value));
  };

  return (
    <div className={styles.cont}>
      <input
        type="text"
        placeholder="Enter today's task"
        value={value}
        onChange={(e) => handleInput(e)}
      />
      <button onClick={handleSubmit}>Add Todo</button>
    </div>
  );
}
