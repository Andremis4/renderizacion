import React, { useState, useEffect } from "react";
function Listado({ colaboradores }) {
  /* const [usuarios, setUsuarios] = useState (props.colaboradores)
    useEffect (() => {
        setUsuarios (props.colaboradores)
                }, [props.colaboradores]) */

  return (
    <div className="container">
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
          {colaboradores == null
            ? ""
            : colaboradores.map((collaborator) => (
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
}

export { Listado };
