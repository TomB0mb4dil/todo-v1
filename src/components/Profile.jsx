import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {Search} from './Search.jsx'


export const Profile = () => {

  const [query, setQuery] = useState("");
  const [todoList, setTodoList] = useState(() => {
    const savedTodos = localStorage.getItem("todoList");
    if (savedTodos) {
      return (JSON.parse(savedTodos));
    } else {
      return [];
    }
  });

  // const [finished, setFinished] = useState([])


  const completeTask = (id) => {
    setTodoList(
      todoList.map((task) => {
        if (task.id === id) {
          return { ...task, completed: `${!task.completed ? true : false}` };
        } else {
          return task;
        }
      })
    );
  };

 
  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);

  const deleteTask = (id) => {
    const newList = todoList.filter((task) => {
      if (task.id === id) {
        return false;
      } else {
        return true;
      }
    });
    setTodoList(newList);
  };

  return (
    <div className='inner-cont'>
      <div className='profile-infos'>
        <div className='info-info'>
        </div>
        </div>
        <Link to="/" className='arrow'>&larr;Home Page</Link>
      <div className='bişeyler'>

        <div className='current-tasks-profile'>
          <h1 className='header-profile'>Current Tasks({todoList.length})</h1>
          <div className='search'>
            <label htmlFor="search">Search: </label>
            <input type="text" className='search-input' placeholder='Search for a task' id='search' onChange={(e) => setQuery(e.target.value)}/>
            <div className='infos-1'>
            </div>
          </div>
          <div className='line-prof'></div>
        </div>
        <div className='profile-tasks'>
          <ul className='profile-todos'>
            {!query ? todoList.map((task,idx) => {
              return (
                <div className={`list-items`} id={task.id}>
                <li
                  className="list-item"
                  style={{ color: task.completed ? "rgb(9,128,9)" : "black" }}
                >
                  {idx + 1}. {task.taskName}
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
              )
            }) : <Search todoList={todoList} query={query} completeTask={completeTask} deleteTask={deleteTask}/>}
          </ul>
        </div>
      </div>
    </div>
  )

 
}

export default Profile