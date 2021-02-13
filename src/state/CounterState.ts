import create, { State } from "../zustand"

export interface ICounterState extends State {
  count: number
  increment: () => void
}

export const CounterState = create<ICounterState>((set, get, api) => ({
  count: 0,
  increment() {
    set((prev) => ({ count: prev.count + 1 }))
  },
}))
