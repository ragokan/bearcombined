import create, { PartialState, State } from "../zustand"
import { devtools } from "../zustand/middleware"

export interface ICounterState extends State {
  count: number
  increment: () => void
}

export const CounterState = create<ICounterState>(
  devtools((set, get, api) => ({
    count: 0,
    increment: () => set((prev) => ({ count: prev.count + 1 })),
  }))
)

export const setCounterState = (partial: PartialState<ICounterState>) => CounterState.setState(partial)
export const getCounterState = CounterState.getState
export const subCounterState = CounterState.subscribe
