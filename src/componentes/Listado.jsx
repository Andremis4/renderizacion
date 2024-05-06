import React, { useState, useEffect } from "react";
function Listado({ colaboradores,filtrado}) {
  console.log(filtrado)
const itemsFiltrados = colaboradores.filter(colaborador => 
Object.values(colaborador).some(valor => 
  typeof valor ==="string"&&
valor.toLowerCase().includes(filtrado.toLowerCase())
)
) 
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
          {itemsFiltrados == null
            ? ""
            : itemsFiltrados.map((collaborator) => (
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

export { Listado };