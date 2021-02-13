import { State } from "../zustand"
import create from "../zustand"

interface IPokemonState extends State {
  pokemons: string[]
  addPokemon: (name: string) => void
}

export const PokemonState = create<IPokemonState>((set, get, api) => ({
  pokemons: [],
  addPokemon: (name) => set((prev) => ({ pokemons: [name, ...prev.pokemons] })),
}))
