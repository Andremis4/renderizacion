import React from "react"

function Alert (props) {
   

    return (
<>
<div className="alert"> 
{props.valor == "blanco" ?"Completa todos los campos": "Colaborador agregado"}

</div>
</>
     
    )
}

export {Alert}