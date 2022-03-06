import React, { Fragment, useContext, useState } from "react";
import { taskContext } from "../contexts/taskContext";
import "../style.css";

const Todo = () => {
  const [task, setTask] = useState("");
  const { taskItems, setTaskItems } = useContext(taskContext);

  const handleSetTask = (event) => {
    clearInterval(event.target);
    setTask(event.target.value);
  };

  const handleAddTask = (event) => {
    event.preventDefault();
    if (task.length) {
      setTaskItems([
        ...taskItems,
        { id: Math.random(), title: task, done: false },
      ]);
      setTask("");
    } else {
      alert("Please Type a Task First!");
    }
  };

  return (
    <div>
      <i>Todo</i>
      <Fragment>
        <h4
          className="text-center text-info
                    text_shadow"
        >
          welcome
        </h4>
        <form onSubmit={handleAddTask}>
          <div className="form-group d-flex">
            <input
              placeholder="Tap here..."
              type="text"
              className="form-control"
              value={task}
              onChange={handleSetTask}
            />
            <button type="submit" className="btn btn-success me-1">
              {" "}
              add
            </button>
          </div>
        </form>
      </Fragment>
    </div>
  );
};

export default Todo;
