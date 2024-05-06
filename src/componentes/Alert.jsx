import React, { useEffect } from "react"

function Alert (props) {
   console.log(props.mensaje)
  
 

    return (
<>
{props.mensaje?<div className= {props.mensaje=="colaborador agregado"?"alert alert-success":"alert alert-danger"} role="alert">
{props.mensaje=="colaborador agregado"? "Usuario Agregado":"Informacion incompleta"}
</div>:<>


</>}



</>
     
    )
}

export {Alert}