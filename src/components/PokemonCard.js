import React from 'react';

function PokemonCard({name, type, image, pokemonTeamHandler}) {
  const pokemonImage = image; 
  
  return (
    <div onClick ={() => pokemonTeamHandler(pokemonImage)}style={{listStyle: 'none', backgroundColor: '#f2f3f2'}}>    
        <img src ={image} style={{maxWidth:'250px' }}/>
        <h5>{name}</h5>
        <h5>{type}</h5>
    </div>
  )
}

export default PokemonCard