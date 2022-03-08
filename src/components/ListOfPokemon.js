import React, {useState, useEffect} from 'react';
import PokemonCard from './PokemonCard';
import Team from '../components/Team'; 


function Home() {
    const pokemonTypes = ['--all--','normal','fighting','flying','poison','ground','rock','bug','ghost','steel','fire','water','grass','electric','psychic','ice','dragon','dark','fairy'];
    const [pokemonArray, setPokemonArray] = useState([]);
    const [data, setData] = useState('');
    const [secondPokemon, setSecondPokemon] = useState(''); 
    const [thirdPokemon, setThirdPokemon] = useState('');
    const [fourthPokemon, setFourthPokemon] = useState('');
    const [fifthPokemon, setFifthPokemon] = useState('');
    const [sixthPokemon, setSixthPokemon] = useState('');
    const [filteredPokemonArray, setFilteredPokemonArray] = useState(null); 

    /*The following @clickHandler is an event handler when the user selects a type from the provided list, if the type is a proper type,
    then it will set the secondary filtered pokemon array with an array that uses the filter array method on the original array. 
    If it is not a valid type but rather all types then it will run the refreshPage function
    */
    const clickHandler = (e) => { 
        if (e.target.value != '--all--') {  
       const typeSelected = e.target.value; 
        setFilteredPokemonArray(pokemonArray.filter((pokemon) => pokemon.type.includes(typeSelected))); //
        console.log(filteredPokemonArray); 
        }
        else {
            refreshPage();
        }
    }

    const pokemonTeamHandler = (teamData) => {
        const listOfData = [data, secondPokemon, thirdPokemon, fourthPokemon, fifthPokemon, sixthPokemon];
        const listOfStates = [setData, setSecondPokemon, setThirdPokemon, setFourthPokemon, setFifthPokemon, setSixthPokemon];
        for(let i = 0; i<listOfData.length; i++) {
        if(listOfData[i] === '') {
            const found = listOfStates[i];
            found(teamData)
            break;
        }
    }

    }

    /*The @refreshPage function will empty the setFiltered array with nothing in it to force a refresh on the page because if setFiltered
    is empty then it will default to the original array with all of the pokemon from the original call. */

    const refreshPage = () => {
        setFilteredPokemonArray(null);
        console.log("refresh")
    }
    // This function handles the search input and updates the pokemon array state. It also works to ensure that it is not case sensitive. 
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
    /* The @apiCall function will do an asynchronus call to the pokemon API. It will loop on every instance of pokemon and convert the raw
    data to json. Finally, on each iteration of pokemon, it will specifically grab the name, the id, the image and the type of the pokemon.
    If it has multiple types, it will join the type array with a comma and essentially convert it to string which is much easier to use. 
    */
    const apiCall = async () => {
        for (let i = 1; i < 151; i++) {
            const rawData = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
            const convertedData = await rawData.json();
            const pokemon = {
                name: convertedData.name.charAt(0).toUpperCase() + convertedData.name.slice(1),
                id: convertedData.id,
                image: convertedData.sprites.other['official-artwork']['front_default'],
                type: convertedData.types.map((type) => type.type.name).join(', '),
            }
            /*grab the current array, then spread it out and add current pokemon object into the array. This is a way to continue to 
            incremenet the array with an additional pokemon. 
            */
            setPokemonArray(currentList => [...currentList, pokemon])
        }
    }
    // The @useEffect function will run apiCall on the initial launch of the page to grab the pokemon information. 
    useEffect(() => {
        apiCall();
    }, [])  
        
    return (
        <div>
            <Team 
                teamOne={data}
                teamTwo={secondPokemon}
                teamThree={thirdPokemon}
                teamFour={fourthPokemon}
                teamFive={fifthPokemon}
                teamSix={sixthPokemon}
            />
            <h3>All Pokemon. <br />Create an account to build and save your team!</h3>
            <div className="mb-2">Name <input onChange={inputHandler}></input></div>
            <div id="pokemon-types" style={{display:'flex', justifyContent:'center'}}>
                
                <span style={{marginRight: '2rem'}}>Choose a type: </span>
                <select onChange={clickHandler}>
                {pokemonTypes.map((types) => {return <option value = {types}>{types.charAt(0).toUpperCase()+types.slice(1)}</option>})} 
                </select>

                </div>
                
                <div id="pokedex-slot">
                    {/* Is filteredPokemonArray is "true" or essentially has something in it, then it will populate the page with 
                        the pokemon that fuifill the filter requirement, however if it is empty then it will populate the page 
                        with just generally all pokemon from the initial call. 
                    */
                    filteredPokemonArray 
                        
                        ? filteredPokemonArray.map((pokemon) =>
                        <PokemonCard
                            name={pokemon.name}
                            image={pokemon.image}
                            type={pokemon.type}
                            pokemonTeamHandler={pokemonTeamHandler}
                        />)

                        : pokemonArray.map((pokemon) =>
                            <PokemonCard
                                name={pokemon.name}
                                image={pokemon.image}
                                type={pokemon.type}
                                pokemonTeamHandler={pokemonTeamHandler}
                            />)
                    };
                    </div>

        </div>
    )
}

export default Home