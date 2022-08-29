// un componente React può essere veramente semplice
// può essere semplicemente una funzione che ritorna del JSX

// è buona prassi chiamare la funzione (il componente React)
// allo stesso modo del file

// COMPONENTE REACT CREATO A FUNZIONE
const MyComponent = () => {
  return (
    // <></> è chiamato REACT FRAGMENT e serve unicamente a
    // fornire un elemento padre a molteplici figli
    <>
      <div>
        <h2>TITOLO</h2>
        <h3>SOTTOTITOLO</h3>
      </div>
      <div>
        <h4>FOOTER</h4>
      </div>
    </>
  )
}

// QUESTO È SEMPRE MYCOMPONENT MA IN VERSIONE ABBREVIATA
// SENZA RETURN STATEMENT, SFRUTTANDO LE ARROW FUNCTION
// const MyComponent = () => (
//       // <></> è chiamato REACT FRAGMENT e serve unicamente a
//       // fornire un elemento padre a molteplici figli
//       <>
//         <div>
//           <h2>TITOLO</h2>
//           <h3>SOTTOTITOLO</h3>
//         </div>
//         <div>
//           <h4>NON SI PUO FARE</h4>
//         </div>
//       </>
// )

// const MyComponent = () => {
//   return <h1>CIAO</h1>
// }

// const MyComponent2 = () => <h1>CIAO</h1> // analoga alla precedente

export default MyComponent
