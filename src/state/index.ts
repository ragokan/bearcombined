import { PartialState } from "../zustand"
import { createCombined } from "../zustand/middleware"
import { CounterState, ICounterState } from "./CounterState"
import { PokemonState } from "./PokemonState"
import { ITodoState, TodoState } from "./TodoState"

type CombinedStoreType = ICounterState & ITodoState
export const useCombinedStore = createCombined<CombinedStoreType>([CounterState, TodoState, PokemonState], true)

export const setCombinedState = (partial: PartialState<CombinedStoreType>) => useCombinedStore.setState(partial)
export const getCombinedState = useCombinedStore.getState
export const subCombinedState = useCombinedStore.subscribe
