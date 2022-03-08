import React, {useState, useEffect} from 'react';
import PokemonCard from './PokemonCard';


function Home() {
    const pokemonTypes = ['--all--','normal','fighting','flying','poison','ground','rock','bug','ghost','steel','fire','water','grass','electric','psychic','ice','dragon','dark','fairy'];
    const [pokemonArray, setPokemonArray] = useState([]);
    const [filteredPokemonArray, setFilteredPokemonArray] = useState(null); 
    
    const clickHandler = (e) => {
        if (e.target.value != '--all--') {
       const typeSelected = e.target.value; 
        console.log(e.target.value); 
        setFilteredPokemonArray(pokemonArray.filter((pokemon) => pokemon.type.includes(typeSelected)));
        console.log(filteredPokemonArray); 
        }
        else {
            refreshPage();
        }
    }
    const refreshPage = () => {
        setFilteredPokemonArray(null);
        console.log("refresh")
    }
    // This function handles the search input and updates the pokemon array state. 
    const inputHandler = (e) => {
        let savedWord = e.target.value;
        let fixedWord = '';
      console.log(savedWord);
      if (savedWord.length > 1) {
         fixedWord = savedWord.charAt(0).toUpperCase() + savedWord.slice(1);
      }
      else {
         fixedWord = savedWord.charAt(0).toUpperCase()
      }     
        setFilteredPokemonArray(pokemonArray.filter(pokemon => { return pokemon.name.includes(e.target.value) || pokemon.name.includes(fixedWord)
        
        }));
    }

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
            <h3>All Pokemon. <br />Create an account to build and save your team!</h3>
            <div className="mb-2">Name <input onChange={inputHandler}></input></div>
            <div id="pokemon-types" style={{display:'flex', justifyContent:'center'}}>
                
                <span style={{marginRight: '2rem'}}>Choose a type: </span>
                <select onChange={clickHandler}>
                {pokemonTypes.map((types) => {return <option value = {types}>{types.charAt(0).toUpperCase()+types.slice(1)}</option>})} 
                </select>

                </div>
                
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
    )
}

export default Home