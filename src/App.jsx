import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const CollaboratorsList = () => {
  const collaborators = [
    {
      name: 'Juan Soto',
      email: 'juans@colaborador.com',
      age: 23,
      role: 'Desarrollador FrontEnd',
      phone: '99887766',
    },
    {
      name: 'Lucas Pailamilla',
      email: 'lucasp@colaborador.com',
      age: 31,
      role: 'Desarrollador Backend',
      phone: '88779955',
    },
    {
      name: 'Diego Riquelme',
      email: 'diegor@colaborador.com',
      age: 28,
      role: 'Ingeniero DevOps',
      phone: '99226644',
    },
  ];

  return (
    <div className="container">
      <h1 style={{fontSize:"25px", textAlign:"center"}}>Lista de Colaboradores</h1>
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
          {collaborators.map((collaborator) => (
            <tr key={collaborator.email}>
              <td>{collaborator.name}</td>
              <td>{collaborator.email}</td>
              <td>{collaborator.age}</td>
              <td>{collaborator.role}</td>
              <td>{collaborator.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CollaboratorsList;