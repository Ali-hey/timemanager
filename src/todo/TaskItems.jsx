import React from "react";
import '../style.css';

const TaskItems=()=>{
    return(
        <div>
            
        </div>
    )
}

export default TaskItems;

/*------------------taskitems------------------------*/
/*const { taskItems, setTaskItems } = useContext(taskContext);

  const handleSetDoneTask = (id) => {
    const index = taskItems.findIndex((t) => t.id === id);
    let newTaskItems = [...taskItems];
    newTaskItems[index].done = !newTaskItems[index].done;
    setTaskItems(newTaskItems);
  };

  const handleDeleteTask = (id) => {
    let newTask = taskItems.filter((t) => t.id !== id);
    setTaskItems(newTask);
  };

  if (taskItems.length) {
    return (
      <ul className="list-group m-0 p-0 mt-2 ">
        {taskItems.map((t) => (
          <li
            className={`list-group-item d-flex justify-content-between ${
              t.done ? "list-group-item-success" : ""
            }`}
          >
            {t.title}
            <span>
              {t.done ? (
                <i
                  className="me-3 pointer fas fa-times text-warning transition_200 text_hover_shadow"
                  onClick={() => {
                    return handleSetDoneTask(t.id);
                  }}
                ></i>
              ) : (
                <i
                  className="me-3 pointer fas fa-check text-success transition_200 text_hover_shadow"
                  onClick={() => {
                    return handleSetDoneTask(t.id);
                  }}
                ></i>
              )}

              <i
                className="me-3 pointer fas fa-trash text-danger transition_200 text_hover_shadow"
                onClick={() => {
                  return handleDeleteTask(t.id);
                }}
              ></i>
            </span>
          </li>
        ))}
      </ul>
    );
  } else {
    return (
      <h4 className="text-center text-danger mt-4">!Nothing Added Today</h4>
    );
  } */