import { State, StateCreator } from "../zustand"

export interface ICounterState extends State {
  count: number
  increment: () => void
}

export const counterStateCreator: StateCreator<ICounterState> = (set, get, api) => ({
  count: 0,
  increment: () => set((prev) => ({ count: prev.count + 1 })),
})
