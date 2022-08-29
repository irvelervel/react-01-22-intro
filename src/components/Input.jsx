// const Input = (props) => {
//   console.log(props)
//   return <input placeholder={props.customPlaceholder} />
// }

import { Component } from 'react'

// // esempio con destructuring delle props:
// // const Input = ({customPlaceholder}) => {
// //     return <input placeholder={customPlaceholder} />
// // }

class Input extends Component {
  // ricordarsi sempre l'unico metodo obbligatorio di un class component: render()
  render() {
    // dentro render mettere SEMPRE un return statement
    return <input placeholder={this.props.customPlaceholder} />
  }
}

// l'oggetto props in un componente a classe fa parte della proprio istanza

export default Input
