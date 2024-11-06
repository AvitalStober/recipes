// src/store/todoStore.js
import { create } from "zustand";
import Todo from "../types/Todo";
import StoreState from "../types/StoreState";

const useTodoStore = create<StoreState>((set) => ({
  todos: [],

  addTodo: (todo: string) =>
    set((state: StoreState) => ({
      todos: [...state.todos, { id: Date.now(), todo }],
    })),

  deleteTodo: (id: number) =>
    set((state) => ({
      todos: state.todos.filter((todo: Todo) => todo.id !== id),
    })),

    editTodo: (id: number, text: string) =>
        set((state) => ({
          todos: state.todos.map((todo) =>
            todo.id === id ? { id:id, todo:text } : todo
          ),
        })),
}));

export default useTodoStore;
