import React, {useState, useEffect} from 'react';
import PokemonCard from '../components/PokemonCard';

function Home() {
    
    const [pokemonArray, setPokemonArray] =useState([]);

    const apiCall = async () => {
        for (let i = 1; i < 50; i++) {
            const rawData = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
            const convertedData = await rawData.json();
            const pokemon = {
                name: convertedData.name,
                id: convertedData.id,
                image: convertedData.sprites['front_default'],
                type: convertedData.types.map((type) => type.type.name).join(', '),
            }
            //grab the current array, then spread it out and add current pokemon object 
            setPokemonArray(currentList => [...currentList, pokemon])
        }
    }
    
    useEffect(() => {
        apiCall();
    }, [])  
    
    
  return (
      <div>
    
     {pokemonArray.map((pokemon) => 
         <PokemonCard 
            name ={pokemon.name}
            image={pokemon.image}
            type={pokemon.type}
        /> )} ;
    </div>
  )
}

export default Home