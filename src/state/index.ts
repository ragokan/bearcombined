import { PartialState } from "../zustand"
import { combineStores, devtools } from "../zustand/middleware"
import create from "../zustand"
import { CounterState, ICounterState } from "./CounterState"
import { PokemonState, IPokemonState } from "./PokemonState"
import { ITodoState, TodoState } from "./TodoState"

type CombinedStoreType = ICounterState & ITodoState & IPokemonState

const combinedStore = combineStores<CombinedStoreType>(CounterState, TodoState, PokemonState)

export const useCombinedStore = create(devtools(combinedStore))

export const setCombinedState = (partial: PartialState<CombinedStoreType>) => useCombinedStore.setState(partial)
export const getCombinedState = useCombinedStore.getState
export const subCombinedState = useCombinedStore.subscribe
