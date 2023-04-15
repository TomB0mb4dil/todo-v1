import React from "react";

export const Search = ({ todoList, query, completeTask, deleteTask }) => {
  return (
    <div>
      <li>
        {todoList
          .filter((todo) => {
            return todo.taskName.toLowerCase().includes(query.toLowerCase());
          })
          .map((task,idx) => {
            return (
                <div className={`list-items`} id={task.id}>
                <li
                  className="list-item"
                  style={{ color: task.completed ? "rgb(9,128,9)" : "black" }}
                >
                  {idx+1}. {task.taskName}
                </li>
                <div className="buttons">
                  <button
                    className="button-done"
                    onClick={() => completeTask(task.id)}
                  >
                    Done!
                  </button>
                  <button
                    className="button-delete"
                    id={task.id}
                    onClick={() => deleteTask(task.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
      </li>
    </div>
  );
};

export default Search;
