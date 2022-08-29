// questo file contiene il nostro primo componente React
// un componente React, nella sua forma più basilare, è una funzione
// che ritorna del JSX

import logo from './logo.svg'
import './App.css'

import MyComponent from './components/MyComponent'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="first-heading">Prima React App!</h1>
        <MyComponent />
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Documentazione
        </a>

        <MyComponent />
      </header>
    </div>
  )
}

export default App

// la sintassi HTML-like che stiamo vedendo si chiama JSX
