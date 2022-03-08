import React from 'react'
import Navbar from '../components/Navbar';
import ListOfPokemon from '../components/ListOfPokemon'; 

function Home() {
    return (
        <div>
            <Navbar />  
            <ListOfPokemon />
        </div>
    )
}

export default Home
