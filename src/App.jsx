import { useState } from "react"
import { BaseColaboradores } from "./assets/BaseColaboradores"

function App () { 
  const [personas, setPersonas] = useState(BaseColaboradores)
  console.log(personas)
  return (

    <>
      <h1> Hola mundo! </h1>
      {personas.map (dato => 
      <article>
        <h3>{dato.nombre}</h3>
        <h3>{dato.correo}</h3>
        <h3>{dato.edad}</h3>
        <h3>{dato.cargo}</h3>
        <h3>{dato.telefono}</h3>
      
      
      </article>)}
    </>
  )

}
  

export default App