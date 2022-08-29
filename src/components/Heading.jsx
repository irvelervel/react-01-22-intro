// style ha bisogno di due parentesi graffe: perchè?
// perchè quella esterna serve solo per delimitare un valore che non è una stringa
// quelle interne sono per descrivere l'oggetto

import Input from './Input'

const Heading = (props) => (
  <div>
    <h1 style={{ color: props.color }}>TITOLO DI OGGI: {props.title}</h1>
    <Input customPlaceholder={props.customPlaceholder} />
    {/* se il valore di una prop NON È una stringa, va delimitato con {} */}
  </div>
)
// props è un oggetto
// title è un proprietà di questo oggetto
// -> props.title

export default Heading

// props (stanno per "properties")
