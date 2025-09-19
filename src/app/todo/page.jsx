"use client";

import { useState } from "react";

export default function Todo(props) {
  const [tasks, setTasks] = useState([]);
  const [inputVal, setInputVal] = useState("");
  const [id, setId] = useState(0);
  const [filter, setFilter] = useState("all");
  const handleChange = (e) => {
    setInputVal(e.target.value);
  };

  const addTask = () => {
    setTasks([
      ...tasks,
      {
        id: id,
        title: inputVal,
        completed: false,
      },
    ]);
    setId(id + 1);
    setInputVal("");
  };

  const deleteDD = (deleteIndex) => {
    const deleteTask = tasks.filter((task) => task.id !== deleteIndex);
    setTasks(deleteTask);
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const filtering = tasks.filter((t) => {
    if (filter === "all") return true;
    if (filter === "active") return t.completed === false;
    if (filter === "completed") return t.completed === true;
  });
}

const keyboard = (e) => {
  if (e.key === "Enter") {
    addTask();
  }
};

return (
  <div className="flex flex-col items-center justify-center w-full h-screen">
    <div className="w-[400px] h-[400px] bg-amber-400">
      <h1 className="text-4xl text-center">Todo list</h1>
      <div className="flex gap-5 items-center">
        <input
          type="text"
          value={inputVal}
          onKeyDown={keyboard}
          onChange={handleChange}
          className="w-[300px] h-[40px] font-bold border-2 bg-amber-50 text-gray-500"
          placeholder="hiih yma oruulda "
        />
        <button
          className="w-[100px] h-[40px] bg-black rounded-2xl"
          onClick={() => addTask()}
        >
          ???
        </button>
      </div>
      <div className="flex gap-5 items-center">
        <button
          className={`w-[100px] h-[40px] ${
            filter === "all"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-black"
          }} rounded-2xl`}
          onClick={() => setFilter("all")}
        >
          All
        </button>
        <button
          className={`w-[100px] h-[40px] ${
            filter === "active"
              ? "bg-blue-500 text-black"
              : "bg-gray-200 text-black"
          }} rounded-2xl`}
          onClick={() => setFilter("active")}
        >
          Active
        </button>
        <button
          className={`w-[100px] h-[40px] ${
            filter === "completed"
              ? "bg-blue-500 text-gray-200"
              : "bg-gray-200 text-black"
          }} rounded-2xl`}
          onClick={() => setFilter("completed")}
        >
          Completed
        </button>
      </div>
      <ol>
        {filtering.map((task, i) => {
          return (
            <li key={task.id} className="flex gap-2 items-center">
              <input
                type="checkbox"
                className="w-[20px] h-[20px]"
                checked={task.completed}
                onClick={() => toggleTask()}
              />
              <p className="text-4xl">{task.title}</p>
              <button
                onClick={() => deleteDD(task.id)}
                className="bg-red-500 w-[100px] h-[50px]"
              >
                delete
              </button>
            </li>
          );
        })}
      </ol>
    </div>
  </div>
);
