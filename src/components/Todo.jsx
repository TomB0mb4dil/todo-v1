import React, {useEffect, useState } from "react";


export const Todo = () => {

  const [todoList, setTodoList] = useState(() => {
    const savedTodos = localStorage.getItem("todoList");
    if (savedTodos) {
      return JSON.parse(savedTodos);
    } else {
      return [];
    }
  });
  const [todo, setTodo] = useState("");
  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);

  const handleChange = (e) => {
    setTodo(e.target.value);
  };


  const addTask = () => {
    if((todoList.map(task => task.taskName === todo)).includes(true)) {
        alert("You Have This Task Already!")
    } else {
        
        const task = {
          id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
          taskName: todo,
          completed: false,
        };
        setTodoList([...todoList, task]);
        alert("Task has been added succesfully.")
    }
  };


  return (
    <div className='outer-cont'>
      <div className='inner-cont'>
        <div className='roww'>
          <div className='add-task-sec'>
            <input placeholder='Add Task' type='text' className='add-task-input' onChange={handleChange}/>
            <button className='add-task-btn' onClick={addTask}>Add</button>
          </div>
          <div className='tasks'><ul className="list">
          {todoList.map((task,idx) => {
            return (
              <div className={`list-items`} id={task.id}>
                <li
                  className="list-item"
                  style={{ color: task.completed ? "rgb(9,128,9)" : "black" }}
                >
                  {idx + 1}. {task.taskName}
                </li>
    
              </div>
            );
          })}
        </ul></div>
        </div>
      </div>
    </div>
  )


};

export default Todo;