import create, { PartialState, State } from "../zustand"
import { devtools } from "../zustand/middleware"

interface ICounterState extends State {
  count: number
}

export const CounterState = create<ICounterState>(
  devtools((set, get, api) => ({
    count: 0,
  }))
)

export const setCounterState = (partial: PartialState<ICounterState>) => CounterState.setState(partial)
export const getCounterState = CounterState.getState
export const subCounterState = CounterState.subscribe
