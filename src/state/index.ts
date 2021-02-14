import { StateCreator, State } from "../zustand"
import { combineStateCreators } from "../zustand/middleware"

interface ICounterState extends State {
  count: number
  increment: () => void
}
interface IPokemonState extends State {
  pokemons: string[]
  addPokemon: (name: string) => void
}

const createState1: StateCreator<ICounterState> = (set, get, api) => ({
  count: 0,
  increment: () => set((prev) => ({ count: prev.count + 1 })),
})

const createState2: StateCreator<IPokemonState> = (set, get, api) => ({
  pokemons: ["Pikachu"],
  addPokemon: (name) => set((prev) => ({ pokemons: [name, ...prev.pokemons] })),
})

combineStateCreators({ foo: createState1, bar: createState2 })
