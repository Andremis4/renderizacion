import React from "react"
import PropTypes from 'prop-types';
import { BaseColaboradores } from "../assets/BaseColaboradores";

const search = ({ BaseColaboradores, setFilter }) => {

    const handleSearch = (e) => {
        e.preventDefault();
        const { value } = e.target;
        const searchedValue = value.toLowerCase()

        const dataBaseFiltered = dataBase.filter((user) => {
           return( 
            
            collaborator.nombre.toLowerCase().includes(searchedValue) ||
            collaborator.correo.toLowerCase().includes(searchedValue) ||
            collaborator.edad.toLowerCase().includes(searchedValue) ||
            collaborator.cargo.toLowerCase().includes(searchedValue) ||
            collaborator.telefono.toLowerCase().includes(searchedValue)
            )
        });
        
        setFilter(BaseColaboradores);
    }

    return (
		<>
			<input type="text" placeholder='Buscar un colaborador'></input>
		</>
	);
};

search.propTypes = {
    dataBase: PropTypes.array.isRequired,
    setFilter: PropTypes.func.isRequired
};


function Buscador() {
   

    return (

<input type="text" placeholder='Buscar un colaborador'></input>

  

    )
}

export {Buscador}

