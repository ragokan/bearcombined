import { State } from "../zustand"
import { combineStateCreators, devtools } from "../zustand/middleware"
import create from "../zustand"
import { counterStateCreator, ICounterState } from "./CounterStateCreator"
import { IPokemonState, pokemonStateCreator } from "./PokemonStateCreator"
import { ITodoState, todoStateCreator } from "./TodoStateCreator"

type ICombinedStore = ICounterState & IPokemonState & ITodoState

export const useCombinedStore = create<ICombinedStore>(
  devtools(combineStateCreators(counterStateCreator, pokemonStateCreator, todoStateCreator))
)
