

"use client";

import React, { useState } from "react";
import useTodoStore from "@/app/store/store";

const TodoList = () => {
  const [task, setTask] = useState(""); // עבור משימה חדשה
  const [text, setText] = useState(""); // עבור טקסט עדכון
  const [editId, setEditId] = useState<number | null>(null); // מזהה המשימה שנמצאת בעריכה

  const todos = useTodoStore((state) => state.todos);
  const addTodo = useTodoStore((state) => state.addTodo);
  const deleteTodo = useTodoStore((state) => state.deleteTodo);
  const editTodo = useTodoStore((state) => state.editTodo);

  const handleAddTask = () => {
    if (task) {
      addTodo(task);
      setTask("");
    }
  };

  const handleEditTask = (id: number) => {
    if (text) {
      editTodo(id, text);
      setEditId(null);
      setText("");
    }
  };

  return (
    <div>
      <div className="bg-blue-300 p-5 shadow-xl">
        <h1 className="font-bold text-center">To-Do List</h1>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter a task"
          className="border border-gray-400 rounded shadow m-5"
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
            {editId === todo.id ? (
              <div className="flex items-center">
                <input
                  type="text"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleEditTask(todo.id)}
                  placeholder="Enter new task"
                  className="border border-gray-400 rounded shadow m-5"
                />
              </div>
            ) : (
              <span>{todo.todo}</span>
            )}
            <div className="flex space-x-2">
              <button
                className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
                onClick={() => {setEditId(todo.id); setText(todo.todo)}} // מכניס את המשימה למצב עריכה
              >
                Edit
              </button>
              <button
                className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
                onClick={() => deleteTodo(todo.id)} // מחיקת המשימה
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
