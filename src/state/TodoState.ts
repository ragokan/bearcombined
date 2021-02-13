import { R4 } from "../utils/RandomIDGenerator"
import create, { State } from "../zustand"

interface ITodo {
  id: number
  text: string
}

export interface ITodoState extends State {
  todos: ITodo[]
  addTodo: (text: string) => void
  filterTodos: (id: number) => void
}

export const TodoState = create<ITodoState>((set, get, api) => ({
  todos: [{ id: R4(), text: "First Todo" }],
  addTodo: (text) => set((prev) => ({ todos: [...prev.todos, { id: R4(), text }] })),
  filterTodos: (id) => set((prev) => ({ todos: prev.todos.filter((val) => val.id !== id) })),
}))
