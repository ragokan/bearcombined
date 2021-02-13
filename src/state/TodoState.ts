import create, { State } from "../zustand"
import { devtools } from "../zustand/middleware"

interface ITodo {
  text: string
}

export interface ITodoState extends State {
  todos: ITodo[]
  addTodo: (text: string) => void
}

export const TodoState = create<ITodoState>(
  devtools((set, get, api) => ({
    todos: [],
    addTodo: (text) => set((prev) => ({ todos: [...prev.todos, { text }] })),
  }))
)
