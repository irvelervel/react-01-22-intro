import { Component } from 'react'
// Component è il primo componente a classe mai esistito
// OGNI TUO COMPONENTE A CLASSE DEVE ESSERE ESTESO DA COMPONENT

class ClassComponent extends Component {
  render() {
    // render() è il metodo fondamentale di ogni componente a classe
    // il suo scopo è RITORNARE DEL JSX
    return <h1>{this.props.mainTitle}</h1>
    // le props in un componente a classe sono un oggetto attaccato
    // all'istanza della classe, quindi va ricercato su "this"
  }
}

export default ClassComponent
