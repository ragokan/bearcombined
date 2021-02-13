import create from "../zustand"
import { combineStores } from "../zustand/middleware"
import { CounterState, ICounterState } from "./CounterState"
import { ITodoState, TodoState } from "./TodoState"

type CombinedStore = ICounterState & ITodoState
const combinedState = combineStores<CombinedStore>(CounterState, TodoState)

export const combinedStore = create(combinedState)
