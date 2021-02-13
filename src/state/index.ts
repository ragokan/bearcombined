import create, { PartialState } from "../zustand"
import { combineStores, devtools } from "../zustand/middleware"
import { CounterState, ICounterState } from "./CounterState"
import { ITodoState, TodoState } from "./TodoState"

type CombinedStoreType = ICounterState & ITodoState
const combinedState = combineStores<CombinedStoreType>(CounterState, TodoState)

export const useCombinedStore = create(devtools(combinedState))

export const setCombinedState = (partial: PartialState<CombinedStoreType>) => useCombinedStore.setState(partial)
export const getCombinedState = useCombinedStore.getState
export const subCombinedState = useCombinedStore.subscribe
