import React, { useState } from "react";

function TaskForm({ addTask }) {
  let [task, setTask] = useState("");
  let [priority, setPriority] = useState("Medium");
  let [category, setCategory] = useState("General");

  const handlesubmit = (e) => {
    e.preventDefault();
    addTask({ text: task, priority, category, completed: false });
    //Reset state
    setTask("");
    setPriority("Medium");
    setCategory("General");
  };
  return (
    <form className="task-form" onSubmit={handlesubmit}>
      <div id="inp">
        <input
          type="text"
          placeholder="Enter the task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <span>
          <button type="submit">Add task</button>
        </span>
      </div>
      <div id="btns">
        <select value={priority} onChange={(e) => setPriority(e.target.value)}>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>

        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="General">General</option>
          <option value="Work">Work</option>
          <option value="Personal">Personal</option>
        </select>
      </div>
    </form>
  );
}

export default TaskForm;
