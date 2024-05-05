<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Formulario } from './componentes/Formulario';
import { BaseColaboradores } from "./assets/BaseColaboradores.js";
import { Buscador } from './componentes/Buscador.jsx';
import { Listado } from './componentes/Listado.jsx';
import {Alert} from "./componentes/Alert.jsx"

const App = () => {
 
const [colaboradores, setColaboradores] = useState (null) 
useEffect (() => {
setColaboradores (BaseColaboradores)
}, [])

useEffect (() => {


}, [colaboradores])
return (
  <>  
  <h1 style={{fontSize:"25px", textAlign:"center"}}>Lista de Colaboradores</h1>
  <Buscador/>
  <Listado colaboradores = {colaboradores}/> 
  <Formulario/>
  {/* <Alert/> */}
  
  </>
 
 
  );
};

export default App;
=======
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BaseColaboradores } from "./assets/BaseColaboradores";

const CollaboratorsList = () => {
  console.log("Datos de colaboradores:", BaseColaboradores);

  return (
    <div className="container">
      <h1 style={{fontSize:"25px", textAlign:"center"}}>Lista de Colaboradores</h1>
      <form><input></input></form>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Edad</th>
            <th>Cargo</th>
            <th>Teléfono</th>
          </tr>
        </thead>
        <tbody>
          {BaseColaboradores.map((collaborator) => (
            <tr key={collaborator.correo}>
              <td>{collaborator.nombre}</td>
              <td>{collaborator.correo}</td>
              <td>{collaborator.edad}</td>
              <td>{collaborator.cargo}</td>
              <td>{collaborator.telefono}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CollaboratorsList;
>>>>>>> 1b9449f417c647fe5f2f03bc190317cd146c51c0
