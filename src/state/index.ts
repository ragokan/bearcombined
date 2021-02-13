import create, { PartialState } from "../zustand"
import { createCombined, devtools } from "../zustand/middleware"
import { CounterState, ICounterState } from "./CounterState"
import { ITodoState, TodoState } from "./TodoState"

type CombinedStoreType = ICounterState & ITodoState
export const useCombinedStore = createCombined<CombinedStoreType>(CounterState, TodoState)

export const setCombinedState = (partial: PartialState<CombinedStoreType>) => useCombinedStore.setState(partial)
export const getCombinedState = useCombinedStore.getState
export const subCombinedState = useCombinedStore.subscribe
