import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  interface Task {
    task: string;
    description: string;
    completed: boolean;
  }

  const [tasks, setTasks] = useState<Task[]>([]);
  const [taskInput, setTaskInput] = useState("");
  const [descInput, setDescInput] = useState("");

  const addTask = () => {
    if (taskInput.trim()) {
      setTasks([
        ...tasks,
        { task: taskInput, description: descInput, completed: false },
      ]);
      setTaskInput("");
      setDescInput("");
    }
  };

  const toggleComplete = (index: number) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
    if (newTasks[index].completed) {
      alert(`${newTasks[index].task} completed!`);
    }
  };

  const deleteTask = (index: number) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <>
      <div className="logo-container">
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className="title">Vite + React ToDo List</h1>
      <div className="todo-container">
        <input
          type="text"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          placeholder="Enter task"
          className="input-field"
        />
        <input
          type="text"
          value={descInput}
          onChange={(e) => setDescInput(e.target.value)}
          placeholder="Enter description"
          className="input-field"
        />
        <button onClick={addTask} className="add-button">
          Add
        </button>
        <ul className="task-list">
          {tasks.map((task, index) => (
            <li key={index} className="task-item">
              <span
                style={{
                  color: task.completed ? "#00ff00" : "#00ffff",
                  textShadow: "0 0 5px #00ffff",
                }}
              >
                <strong>{task.task}</strong>: {task.description}
              </span>
              <div>
                <button
                  onClick={() => toggleComplete(index)}
                  className={
                    task.completed
                      ? "complete-button active"
                      : "complete-button"
                  }
                >
                  ✓
                </button>
                <button
                  onClick={() => deleteTask(index)}
                  className="delete-button"
                >
                  ✗
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
