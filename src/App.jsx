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