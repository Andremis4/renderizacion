import React, { useState } from 'react';

const Formulario = ({ agregarColaborador }) => {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [edad, setEdad] = useState('');
  const [cargo, setCargo] = useState('');
  const [telefono, setTelefono] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nombre.trim() !== '' && correo.trim() !== '' && edad.trim() !== '' && cargo.trim() !== '' && telefono.trim() !== '') {
      agregarColaborador({ nombre, correo, edad, cargo, telefono });
      setNombre('');
      setCorreo('');
      setEdad('');
      setCargo('');
      setTelefono('');
    } else {
      alert('Todos los campos son obligatorios');
    }
  };

  return (
    <div className="container mt-4">
      <h2>Formulario para Agregar Colaborador</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} placeholder="Nombre" className="form-control" required />
        </div>
        <div className="form-group">
          <input type="email" value={correo} onChange={(e) => setCorreo(e.target.value)} placeholder="Correo" className="form-control" required />
        </div>
        <div className="form-group">
          <input type="number" value={edad} onChange={(e) => setEdad(e.target.value)} placeholder="Edad" className="form-control" required />
        </div>
        <div className="form-group">
          <input type="text" value={cargo} onChange={(e) => setCargo(e.target.value)} placeholder="Cargo" className="form-control" required />
        </div>
        <div className="form-group">
          <input type="tel" value={telefono} onChange={(e) => setTelefono(e.target.value)} placeholder="Teléfono" className="form-control" required />
        </div>
        <button type="submit" className="btn btn-primary">Agregar Colaborador</button>
      </form>
    </div>
  );
};

export default Formulario;
