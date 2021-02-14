import { State } from "../zustand"
import { combineStateCreators } from "../zustand/middleware"
import create from "../zustand/vanilla"
import { counterStateCreator, ICounterState } from "./CounterStateCreator"
import { IPokemonState, pokemonStateCreator } from "./PokemonStateCreator"
import { ITodoState, todoStateCreator } from "./TodoStateCreator"

interface ICombinedStore extends State {
  counter: ICounterState
  pokemon: IPokemonState
  todo: ITodoState
}

export const useCombinedStore = create<ICombinedStore>(
  combineStateCreators({ counter: counterStateCreator, pokemon: pokemonStateCreator, todo: todoStateCreator })
)
