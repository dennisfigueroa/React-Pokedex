import React, {useState, useEffect} from 'react';
import PokemonCard from '../components/PokemonCard';

function Home() {
    const pokemonTypes = ['normal','fighting','flying','poison','ground','rock','bug','ghost','steel','fire','water','grass','electric','psychic','ice','dragon','dark','fairy'];
    const [pokemonArray, setPokemonArray] = useState([]);
    const [filteredPokemonArray, setFilteredPokemonArray] = useState(null); 

    const clickHandler = (e) => {
        const typeSelected = e.target.innerText; 
        console.log(typeSelected); 
        setFilteredPokemonArray(pokemonArray.filter((pokemon) => pokemon.type.includes(typeSelected)));
        console.log(filteredPokemonArray); 

    }

    // const clickHandler = async (e) => {
    //     const typeChosen = e.target.innerText;
    //     const filteredPokemonByType = await fetch(`https://pokeapi.co/api/v2/type/${typeChosen}`);
    //     const filteredPokemonByTypeJSON = await filteredPokemonByType.json();
    //     const findingPokemonName = filteredPokemonByTypeJSON.pokemon;
    //     console.log(filteredPokemonByTypeJSON);
    //     console.log(findingPokemonName);
    // }

    const apiCall = async () => {
        for (let i = 1; i < 500; i++) {
            const rawData = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
            const convertedData = await rawData.json();
            const pokemon = {
                name: convertedData.name,
                id: convertedData.id,
                image: convertedData.sprites.other['official-artwork']['front_default'],
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
            <h2>Dennis Pokedex</h2>
            <div id="pokemon-types">
                {pokemonTypes.map((types) => {return <button onClick={clickHandler}>{types}</button>})} 
                </div>
            <div className="container">
                <div id="pokedex-slot">
                    {filteredPokemonArray 
                        
                        ? filteredPokemonArray.map((pokemon) =>
                        <PokemonCard
                            name={pokemon.name}
                            image={pokemon.image}
                            type={pokemon.type}
                        />)

                        : pokemonArray.map((pokemon) =>
                            <PokemonCard
                                name={pokemon.name}
                                image={pokemon.image}
                                type={pokemon.type}
                            />)
                    };
                    </div>
            </div>

        </div>
    )
}

export default Home