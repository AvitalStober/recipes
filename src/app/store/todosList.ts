// // src/store/todoStore.js
// import { create } from "zustand";

// interface Todo {
//     id: number;
//     text: string;
//   }

// // יצירת Store באמצעות הפונקציה create מ-zustand
// const useTodoStore = create((set) => ({

//   todos: [],

//   addTodo: (text: string) =>
//     set((state) => ({
//       todos: [...state.todos, { id: Date.now(), text }],
//     })),


//   deleteTodo: (id: number) =>
//     set((state) => ({
//       todos: state.todos.filter((todo) => todo.id !== id),
//     })),
// }));

// export default useTodoStore;