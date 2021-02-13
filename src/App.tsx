import React from "react"
import "./App.css"
import "./state"
import { setCombinedState, useCombinedStore } from "./state"

function App() {
  const { count, increment } = useCombinedStore()

  return (
    <div className="App">
      <header className="App-header">
        <h1>Counter: {count}!</h1>
        <button onClick={() => increment()}>Increment</button>
        <button onClick={() => setCombinedState({ count: count - 1 })}>Decrement</button>
      </header>
    </div>
  )
}

export default App
