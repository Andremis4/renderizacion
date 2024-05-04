import React, { useState } from 'react';

const Buscador = ({ colaboradores, setFiltro }) => {
  const [termino, setTermino] = useState('');

  const handleChange = (e) => {
    setTermino(e.target.value);
    setFiltro(e.target.value);
  };

  return (
    <div className="container mt-4">
      <h2>Buscador de Colaboradores</h2>
      <input type="text" value={termino} onChange={handleChange} placeholder="Buscar..." className="form-control" />
    </div>
  );
};

export default Buscador;
