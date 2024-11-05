import Todo from "./Todo";

export default interface StoreState {
  todos: Todo[]; // An array of Todo items
  addTodo: (text: string) => void;
  deleteTodo: (id: number) => void;
}
