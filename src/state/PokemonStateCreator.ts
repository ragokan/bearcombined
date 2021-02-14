import { State, StateCreator } from "../zustand"

export interface IPokemonState extends State {
  pokemons: string[]
  addPokemon: (name: string) => void
}

export const pokemonStateCreator: StateCreator<IPokemonState> = (set, get, api) => ({
  pokemons: ["Pikachu"],
  addPokemon: (name) => set((prev) => ({ pokemons: [name, ...prev.pokemons] })),
})
