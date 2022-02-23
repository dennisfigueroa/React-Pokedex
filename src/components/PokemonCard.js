import React from 'react'

function PokemonCard({name, type, image}) {
  return (
    <li>    
        <img src ={image}/>
        <h5>{name}</h5>
        <h5>{type}</h5>
    </li>
  )
}

export default PokemonCard