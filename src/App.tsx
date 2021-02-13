import React from "react"
import "./App.css"
import { CounterState, setCounterState } from "./state/CounterState"

function App() {
  const count = CounterState((state) => state.count)

  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello {count}!</h1>
        <button onClick={() => setCounterState({ count: count + 1 })}>Increment</button>
      </header>
    </div>
  )
}

export default App
