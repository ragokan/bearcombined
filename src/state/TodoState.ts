import create, { State } from "../zustand"

interface ITodo {
  text: string
}

export interface ITodoState extends State {
  todos: ITodo[]
  addTodo: (text: string) => void
}

export const TodoState = create<ITodoState>((set, get, api) => ({
  todos: [],
  addTodo: (text) => set((prev) => ({ todos: [...prev.todos, { text }] })),
}))
