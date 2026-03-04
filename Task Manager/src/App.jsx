import { useEffect, useState } from "react";

import React from "react";
import ProgressBar from "./Components/ProgressBar";
import TaskList from "./Components/TaskList";
import TaskForm from "./Components/TaskForm";
import './Style.css'

export default function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  });

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const updateTask = (updatedTask, index) => {
    const newTask = [...tasks];
    newTask[index] = updatedTask;
    setTasks(newTask);
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i != index));
  };

  const clearTasks = () => {
    setTasks([]);
  };

  return (
    <div>
      <header>
        <h1>Task Manager</h1>
        <p>
          <i>You own Task Manager</i>
        </p>
      </header>
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} updateTask={updateTask} deleteTask={deleteTask} />
      <ProgressBar tasks={tasks} />
      {tasks.length > 0 && (
        <button className="clear-btn" onClick={clearTasks}>
          Clear All Tasks
        </button>
      )}
    </div>
  );
}
