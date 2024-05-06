import React, { useState, useEffect } from "react";

function Buscador({ buscar }) {
  const [filter, setFilter] = useState("");
  
  useEffect(() => {
    if(filter!==""){
        buscar(filter);
    }
   
  }, [filter]);
  return (
    <input
      type="text"
      value={filter}
      onChange={(e) => setFilter(e.target.value)}
      placeholder="Buscar un colaborador" 
    ></input>
  );
}

export { Buscador };