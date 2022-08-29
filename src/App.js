// questo file contiene il nostro primo componente React
// un componente React, nella sua forma più basilare, è una funzione
// che ritorna del JSX

import './App.css'

// import MyComponent from './components/MyComponent'
import Heading from './components/Heading'
import ClassComponent from './components/ClassComponent'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="first-heading">Prima React App!</h1>

        <Heading
          title="INTRODUZIONE"
          color="green"
          customPlaceholder="Scrivi il tuo nome"
        />

        <Heading
          title="PRIMI COMPONENTI"
          color="purple"
          customPlaceholder="Scrivi il tuo cognome"
        />

        <Heading customPlaceholder="Scrivi il tuo email" />
        {/* senza una prop title, dopo i due punti non comparirà niente */}

        <ClassComponent mainTitle="TITOLO DELLA CLASSE" />
        {/* <MyComponent /> */}
        {/* è possibile invocare un componente più volte */}
      </header>
    </div>
  )
}

export default App

// la sintassi HTML-like che stiamo vedendo si chiama JSX
