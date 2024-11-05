// src/store/todoStore.js
import { create } from "zustand";
import Todo from "../types/Todo";
import StoreState from "../types/StoreState";

// יצירת Store באמצעות הפונקציה create מ-zustand
const useTodoStore = create<StoreState>((set) => ({

  todos: [],

  addTodo: (text: string) =>
    set((state: StoreState) => ({
      todos: [...state.todos, { id: Date.now(), text }],
    })),


  deleteTodo: (id: number) =>
    set((state) => ({
      todos: state.todos.filter((todo: Todo) => todo.id !== id),
    })),
}));

export default useTodoStore;