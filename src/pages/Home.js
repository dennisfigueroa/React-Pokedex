import { createFactory } from "react";

import React from 'react'
import Navbar from '../components/Navbar';
import ListOfPokemon from '../components/ListOfPokemon'; 

function Original() {
    return (
        <div>
            <Navbar />  
            <div className="container">
            <ListOfPokemon />
            </div>
        </div>
    )
}

export default Original
