import { PartialState } from "../zustand"
import { combineStores, devtools } from "../zustand/middleware"
import create from "../zustand"
import { CounterState, ICounterState } from "./CounterState"
import { PokemonState, IPokemonState } from "./PokemonState"
import { ITodoState, TodoState } from "./TodoState"

type CombinedStoreType = ICounterState & ITodoState & IPokemonState

export const useCombinedStore = create<CombinedStoreType>(
  devtools(combineStores(CounterState, TodoState, PokemonState))
)

export const setCombinedState = (partial: PartialState<CombinedStoreType>) => useCombinedStore.setState(partial)
export const getCombinedState = useCombinedStore.getState
export const subCombinedState = useCombinedStore.subscribe
