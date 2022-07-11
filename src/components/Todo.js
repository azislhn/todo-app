import React from "react";
import { useState, useEffect } from "react";
import "./Todo.css";

export default function Todo() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("todolist")) {
      const stored = JSON.parse(localStorage.getItem("todolist"));
      setTasks(stored);
    }
  }, [])

  const addTask = (e) => {
    e.preventDefault();
    if (task) {
      const newTask = { id: new Date().getTime().toString(), title: task };
      setTasks([...tasks, newTask]);
      localStorage.setItem("todolist", JSON.stringify([...tasks, newTask]));
      setTask('');
    }
  }

  const handleDelete = (task) => {
    const del = tasks.filter((t) => t.id !== task.id);
    setTasks(del);
    localStorage.setItem("todolist", JSON.stringify(del));
  }

  return (
    <React.Fragment>
      <form type="text" onSubmit={addTask}>
        <input value={task} onChange={(e) => setTask(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
      <div className="todo-list">
        <ul>
          {
            tasks.map((task) => (
              <li key={task.id} className="task">
                {task.title}
                <button className="delete-btn" onClick={() => handleDelete(task)}>Done</button>
              </li>))
          }
        </ul>
      </div>
    </React.Fragment>
  )
}