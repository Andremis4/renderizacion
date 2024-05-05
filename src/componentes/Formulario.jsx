import React, { useState, useEffect } from "react";
const datosFormulario = {
  nombre: "",
  correo: "",
  telefono: "",
  cargo: "",
  edad: "",
};

function Formulario(props) {
  const [formulario, setFormulario] = useState(datosFormulario);
  const { nombre, correo, telefono, cargo, edad } = datosFormulario;

  function handleChange(nombre, valor) {
   
    setFormulario((estadoPrevio) => {
        return {
            ...estadoPrevio,
            [nombre]:valor
        }
    })
  }
  useEffect(() => {
    console.log(formulario);
  }, [formulario]);

  return (
    <form>
      <input
        type="text"
        name="nombre"
        placeholder="Nombre"
        value={nombre === "" ? "" : nombre}
        onChange={(e) => handleChange(e.target.name, e.target.value)}
      ></input>
      <input
        type="text"
        name="correo"
        placeholder="Correo"
        value={correo === "" ? "" : correo}
        onChange={(e) => handleChange(e.target.name, e.target.value)}
      ></input>
      <input
        type="text"
        name="telefono"
        placeholder="Telefono"
        value={telefono === "" ? "" : telefono}
        onChange={(e) => handleChange(e.target.name, e.target.value)}
      ></input>
      <input
        type="text"
        name="cargo"
        placeholder="Cargo"
        value={cargo === "" ? "" : cargo}
        onChange={(e) => handleChange(e.target.name, e.target.value)}
      ></input>
      <input
        type="text"
        name="edad"
        placeholder="Edad"
        value={edad === "" ? "" : edad}
        onChange={(e) => handleChange(e.target.name, e.target.value)}
      ></input>

      <button> :D </button>
    </form>
  );
}

export { Formulario };
