// import React from 'react'

// const todoList = () => {
//   return (
//     <div>todoList</div>
//   )
// }

// export default todoList

// src/components/TodoList.js
"use client";

import React, { useState } from "react";
import useTodoStore from "@/app/store/store";

const TodoList = () => {
  const [task, setTask] = useState("");
  const todos = useTodoStore((state) => state.todos);
  const addTodo = useTodoStore((state) => state.addTodo);
  const deleteTodo = useTodoStore((state) => state.deleteTodo);

  const handleAddTask = () => {
    if (task) {
      addTodo(task);
      setTask("");
    }
  };

  return (
    <div>
      <div className="bg-blue-300 p-5 shadow-xl mask-image-radial-gradient(white, transparent)">
        <h1 className="font-bold text-center">To-Do List</h1>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder=" Enter a task"
          className="border border-gray-400 rounded shadow m-5 "
        />
        <button
          className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
          onClick={handleAddTask}
        >
          Add Task
        </button>
      </div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} className="flex justify-between m-5">
            {todo.text}
            <button
              className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
              onClick={() => deleteTodo(todo.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
