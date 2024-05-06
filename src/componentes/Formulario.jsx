import React, { useState, useEffect } from "react";
const datosFormulario = {
  nombre: "",
  correo: "",
  telefono: "",
  cargo: "",
  edad: "",
};

function Formulario({actualizarlistado}) {
  const [indice, setIndice] = useState(datosFormulario);
  const { nombre, correo, telefono, cargo, edad } = indice;
 const enviarDatos = (e) => {
  e.preventDefault();
actualizarlistado(indice)


 }
 
  function handleChange(nombre, valor) {
     setIndice((estadoPrevio) => {
        return {
            ...estadoPrevio,
            [nombre]:valor
        }
    })
  }
  return (
    <div >
    <form onSubmit={enviarDatos}>
      <input
        type="text"
        name="nombre"
        placeholder="Nombre"
        value={nombre}
        onChange={(e) => handleChange(e.target.name, e.target.value)}
      ></input>
      <input
        type="text"
        name="correo"
        placeholder="Correo"
        value={correo}
        onChange={(e) => handleChange(e.target.name, e.target.value)}
      ></input>
      <input
        type="text"
        name="telefono"
        placeholder="Telefono"
        value={telefono}
        onChange={(e) => handleChange(e.target.name, e.target.value)}
      ></input>
      <input
        type="text"
        name="cargo"
        placeholder="Cargo"
        value={cargo}
        onChange={(e) => handleChange(e.target.name, e.target.value)}
      ></input>
      <input
        type="text"
        name="edad"
        placeholder="Edad"
        value={edad}
        onChange={(e) => handleChange(e.target.name, e.target.value)}
      ></input>

      <button type="submit"> Agregar </button>
    </form>
    </div>
  );
}

export { Formulario };
