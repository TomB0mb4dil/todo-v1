

import React from 'react'
import { Link } from 'react-router-dom';

export const Finished = () => {
    const todoList = (() => {
        const savedTodos = localStorage.getItem("todoList");
        if (savedTodos) {
          return (JSON.parse(savedTodos));
        } else {
          return [];
        }
      });

      const finishedTasks = todoList().filter((todo) => todo.completed)

  return (
    <div>
       <Link to="/" className='arrow'>&larr;Home Page</Link>
        <h1 className='completed-tasks-header'>Completed Tasks({finishedTasks.length})</h1>
        <ul className="list">
          {finishedTasks.map((task,idx) => {
            return (
              <div className={`list-items`} id={task.id}>
                <li
                  className="list-item"
                >
                  {idx + 1}. {task.taskName}
                </li>
    
              </div>
            );
          })}
        </ul>
    </div>
  )
}

export default Finished