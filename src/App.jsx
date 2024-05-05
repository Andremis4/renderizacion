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
