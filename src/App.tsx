import React, { useState } from "react"
import "./App.css"
import { useCombinedStore } from "./state"

function App() {
  const [todoText, setTodoText] = useState<string>("")
  const [pokemonText, setPokemonText] = useState<string>("")
  const { count, increment, addPokemon, pokemons, addTodo, filterTodos, todos } = useCombinedStore()

  return (
    <div className="App">
      <header>
        <h2>Counter</h2>
        <h4>{count}</h4>
        <button onClick={() => increment()}>Increment</button>
        <button onClick={() => useCombinedStore.setState((prev) => ({ count: prev.count - 1 }))}>Decrement</button>
        <hr />
        <h2>Todos</h2>
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              {todo.text} <button onClick={() => filterTodos(todo.id)}>Click to remove</button>
            </li>
          ))}
        </ul>
        <input value={todoText} onChange={(e) => setTodoText(e.target.value)} placeholder="Todo Text" />
        <button onClick={() => addTodo(todoText)}>Add</button>
        <hr />
        <h2>Pokemons</h2>
        <ol>
          {pokemons.map((pokemon, index) => (
            <li key={index}>{pokemon}</li>
          ))}
        </ol>
        <input value={pokemonText} onChange={(e) => setPokemonText(e.target.value)} placeholder="Pokemon Name" />
        <button onClick={() => addPokemon(pokemonText)}>Add</button>
      </header>
    </div>
  )
}

export default App
