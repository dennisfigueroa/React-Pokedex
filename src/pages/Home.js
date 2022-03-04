import React, {useState, useEffect} from 'react';
import PokemonCard from '../components/PokemonCard';
import Navbar from '../components/Navbar'; 
import FilterOptions from '../components/FilterOptions';

function Home() {
    const pokemonTypes = ['normal','fighting','flying','poison','ground','rock','bug','ghost','steel','fire','water','grass','electric','psychic','ice','dragon','dark','fairy'];
    const [pokemonArray, setPokemonArray] = useState([]);
    const [filteredPokemonArray, setFilteredPokemonArray] = useState(null); 

    const clickHandler = (e) => {
       const typeSelected = e.target.value; 
        console.log(e.target.value); 
        setFilteredPokemonArray(pokemonArray.filter((pokemon) => pokemon.type.includes(typeSelected)));
        console.log(filteredPokemonArray); 
    }
    const refreshPage = () => {
        setFilteredPokemonArray(null);
        console.log("refresh")
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
                name: convertedData.name.charAt(0).toUpperCase() + convertedData.name.slice(1),
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
            <Navbar />
            <h3>All Pokemon. <br />Create an account to build and save your team!</h3>
            <button style={{marginBottom: '2rem'}} onClick = {refreshPage}>Refresh all</button>
            <div id="pokemon-types" style={{display:'flex', justifyContent:'center'}}>
                <span style={{marginRight: '2rem'}}>Choose a type: </span>
                <select onChange={clickHandler}>
                {pokemonTypes.map((types) => {return <option value = {types}>{types.charAt(0).toUpperCase()+types.slice(1)}</option>})} 
                </select>

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