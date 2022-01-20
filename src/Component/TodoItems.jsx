import React from "react";
import { deleteTodo, toggleTodo } from "../Redux/action";
import { AppContext } from "../Redux/AppContextProvider";
import styles from "./TodoItems.module.css";

const displayStyle = (open) => {
  if (open) {
    return {
      display: "block"
    };
  } else {
    return {
      display: "none"
    };
  }
};
export default function TodoItems({ task }) {
  const [open, setOpen] = React.useState(false);
  const displayPopup = (open) => displayStyle(open);

  const { dispatch, getState } = React.useContext(AppContext);

  const handleToggle = (payload) => {
    dispatch(toggleTodo(payload));
    setOpen(false);
  };
  const handleDelete = (payload) => {
    dispatch(deleteTodo(payload));
  };

  const handleCancle = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <div className={styles.conts}>
      <h3 style={{ marginRight: "1rem" }}>{task.title} </h3>
      <p style={{ marginRight: "1rem" }}>
        (Status:{task.status ? "Complete" : "Remaining"})
      </p>
      <button onClick={handleOpen} className={styles.edit}>
        ✎
      </button>
      <button
        onClick={() => handleDelete(task.title)}
        className={styles.cancle}
      >
        X
      </button>

      <div style={displayPopup(open)} className={styles.popup}>
        <h4>Want to change status ?</h4>
        <button onClick={() => handleToggle(task.title)}>Yes</button>
        <button onClick={handleCancle}>No</button>
      </div>
    </div>
  );
}
