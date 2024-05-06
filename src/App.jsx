import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Formulario } from "./componentes/Formulario";
import { BaseColaboradores } from "./assets/BaseColaboradores.js";
import { Buscador } from "./componentes/Buscador.jsx";
import { Listado } from "./componentes/Listado.jsx";
import { Alert } from "./componentes/Alert.jsx";
const App = () => {
  const [colaboradores, setColaboradores] = useState([]);
  const [entrada, setEntrada] = useState(undefined);

  function actualizarlistado(objeto) {
    if (
      Object.values(objeto).some(
        (value) => value === "" || value === null || value === undefined
      )
    ) {
      setEntrada("error");
    } else {
      setColaboradores((estadoPrevio) => [...estadoPrevio, objeto]);
      setEntrada("colaborador agregado");
    }
  }
  useEffect(() => {
    setColaboradores(BaseColaboradores);
  }, []);
 
  return (
    <>
      <h1 style={{ fontSize: "25px", textAlign: "center" }}>
        Lista de Colaboradores
      </h1>
      <Buscador />
      <Listado colaboradores={colaboradores} />
      <Formulario actualizarlistado={actualizarlistado} />
      <Alert mensaje={entrada} />
    </>
  );
};

export default App;
