import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App' // questo è un componente React

const root = ReactDOM.createRoot(document.getElementById('root'))
// React sta creando un elemento "radice" selezionando il div vuoto
// con un id="root"
root.render(<App />)

// questo file si occupa di montare il primo componente React (App)
// all'interno di un elemento radice, creato sul div con id="root"
