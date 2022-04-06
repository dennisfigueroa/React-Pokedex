import React, {useState, useEffect, useRef} from 'react';
import PokemonCard from './PokemonCard';
import Team from '../components/Team'; 
import useIsMount from '../components/useIsMount';


function Home() {
    const pokemonTypes = ['--all--','normal','fighting','flying','poison','ground','rock','bug','ghost','steel','fire','water','grass','electric','psychic','ice','dragon','dark','fairy'];
    const pokemonEgg = require('../assets/pokemonEgg.png');
    const [pokemonArray, setPokemonArray] = useState([]);
    const [unclickedPokemonArray, setUnclickedPokemonArray] = useState(null);
    const [firstPokemon, setFirstPokemon] = useState(pokemonEgg);
    const [secondPokemon, setSecondPokemon] = useState(pokemonEgg); 
    const [thirdPokemon, setThirdPokemon] = useState(pokemonEgg);
    const [fourthPokemon, setFourthPokemon] = useState(pokemonEgg);
    const [fifthPokemon, setFifthPokemon] = useState(pokemonEgg);
    const [sixthPokemon, setSixthPokemon] = useState(pokemonEgg);
    const [filteredPokemonArray, setFilteredPokemonArray] = useState(null); 
    const [teamPokemon, setTeamPokemon] = useState([]);
    const inputRef = useRef();
    const isMount = useIsMount();
    
    const renderPokemonOut = () => {
        
        if (filteredPokemonArray) {
            return filteredPokemonArray.map((pokemon) => 
            <PokemonCard
            name={pokemon.name}
            image={pokemon.image}
            type={pokemon.type}
            pokemonTeamHandler={pokemonTeamHandler}
              />)
        }
        else if (unclickedPokemonArray) {
            return unclickedPokemonArray.map((pokemon) =>
                <PokemonCard
                    name={pokemon.name}
                    image={pokemon.image}
                    type={pokemon.type}
                    pokemonTeamHandler={pokemonTeamHandler}
                />)
        }
        else {
            return pokemonArray.map((pokemon) =>
            <PokemonCard
                name={pokemon.name}
                image={pokemon.image}
                type={pokemon.type}
                pokemonTeamHandler={pokemonTeamHandler}
            />)
        }
    }
        
    /*The following @clickHandler is an event handler when the user selects a type from the provided list, if the type is a proper type,
    then it will set the secondary filtered pokemon array with an array that uses the filter array method on the original array. 
    If it is not a valid type but rather all types then it will run the refreshPage function
    */
    
    
    const clickHandler = (e) => { 
        if (e.target.value != '--all--') {  
       const typeSelected = e.target.value; 
            if (unclickedPokemonArray) {    
                setFilteredPokemonArray(unclickedPokemonArray.filter((pokemon) => pokemon.type.includes(typeSelected)))
            }
            // else if (filteredPokemonArray) {
            //     setFilteredPokemonArray(pokemonArray.filter((pokemon) => pokemon.type.includes(typeSelected)))
            // }
            else
            {
                setFilteredPokemonArray(pokemonArray.filter((pokemon) => pokemon.type.includes(typeSelected)));

            }
        }
        else {
            setFilteredPokemonArray(null);
        }

    }

    const placeEgg = (teamMember, setTeam) => {
        if (teamMember != pokemonEgg) {
            setTeam(pokemonEgg); 
            removeTeamMember(teamMember)
        }
    }
    
    //Find a fix for repeated pokemon
    //Fixed the repeating/duplicating pokemon that are already on team issue. Essentially kept an array that recorded numbers and would only add another if it was ensured it wasn't a part of the existing array. 
    const randomizeTeam = () => {

       const randomTeamArray = []; //Create an array of random pokemon based on the random number. 
       let teamCounter;
       for(teamCounter =0; randomTeamArray.length < 6; teamCounter++) { 
           let randomNumber = Math.floor(Math.random() * 151) + 1;
           if (randomTeamArray.indexOf(randomNumber) === -1) {
           randomTeamArray.push(randomNumber);
           console.log(randomTeamArray)
           }
       }
      setFirstPokemon(pokemonArray[randomTeamArray[0]].image);
      setSecondPokemon(pokemonArray[randomTeamArray[1]].image);
      setThirdPokemon(pokemonArray[randomTeamArray[2]].image);
      setFourthPokemon(pokemonArray[randomTeamArray[3]].image);
      setFifthPokemon(pokemonArray[randomTeamArray[4]].image);
      setSixthPokemon(pokemonArray[randomTeamArray[5]].image);  

setTeamPokemon([pokemonArray[randomTeamArray[0]].image,pokemonArray[randomTeamArray[1]].image,pokemonArray[randomTeamArray[2]].image,pokemonArray[randomTeamArray[3]].image,pokemonArray[randomTeamArray[4]].image,pokemonArray[randomTeamArray[5]].image  ])

    }

    const pokemonTeamHandler = (imageData) => {
        if (teamPokemon.length <6) {
        setTeamPokemon(teamArray => [...teamArray, imageData]);
        const allPokemonOnTeam = [firstPokemon, secondPokemon, thirdPokemon, fourthPokemon, fifthPokemon, sixthPokemon];
        const setterForAllPokemonOnTeam = [setFirstPokemon, setSecondPokemon, setThirdPokemon, setFourthPokemon, setFifthPokemon, setSixthPokemon];
         for (let i = 0; i < allPokemonOnTeam.length; i++) {
            if (allPokemonOnTeam[i] === pokemonEgg) {
                const correspondingSetter = setterForAllPokemonOnTeam[i];
                correspondingSetter(imageData)
                break;
            }
        }
    }
    }

    
    const removeTeamMember = (image) => {
         setTeamPokemon(teamPokemon.filter((pokemonImage) => pokemonImage != image ))
  }

    useEffect(() => {
        /* This uses a custom hook to work, what it does is it sets isMount to true initially, 
        and will only convert it to false after the first render. It uses ref instead of state
        since we don't want to trigger a re-render. Once teamPokemon changes, it will run the following to update the view. 
        */
        if (!isMount) {
            setUnclickedPokemonArray(pokemonArray.filter(pokemon => !teamPokemon.includes(pokemon.image)))
           
        }
    }, [teamPokemon])

    useEffect(() => {
    if (!isMount){
        if (filteredPokemonArray) {                                            
            try{                              
            setFilteredPokemonArray(unclickedPokemonArray.filter(pokemon => pokemon.type.includes(inputRef.current.value))) //Filter the filtered array and if pokemon image is not a part of team, display. 
            }
            catch (e) {
                console.log(e);
            }
        }
    }
    }, [unclickedPokemonArray])


    
    useEffect (() => {
       
       console.log(`This is the value: ${inputRef}`)
    }, [inputRef])


    /*The @refreshPage function will empty the setFiltered array with nothing in it to force a refresh on the page because if setFiltered
    is empty then it will default to the original array with all of the pokemon from the original call. */

    const refreshPage = () => {
        setUnclickedPokemonArray(null);
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
        if (unclickedPokemonArray){
        setFilteredPokemonArray(unclickedPokemonArray.filter(pokemon => {return pokemon.name.includes(e.target.value) || pokemon.name.includes(fixedWord)}))
        }
        else {
            setFilteredPokemonArray(pokemonArray.filter(pokemon => { return pokemon.name.includes(e.target.value) || pokemon.name.includes(fixedWord)}))
        }
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
                firstPokemon={firstPokemon}
                setFirstPokemon={setFirstPokemon}
                secondPokemon={secondPokemon}
                setSecondPokemon={setSecondPokemon}
                thirdPokemon={thirdPokemon}
                setThirdPokemon={setThirdPokemon}
                fourthPokemon={fourthPokemon}
                setFourthPokemon={setFourthPokemon}
                fifthPokemon={fifthPokemon}
                setFifthPokemon={setFifthPokemon}
                sixthPokemon={sixthPokemon}
                setSixthPokemon={setSixthPokemon}
                removeTeamMember={removeTeamMember}
                placeEgg={placeEgg}
                randomizeTeam={randomizeTeam}
            />
            <h3>All Pokemon. <br />Create an account to build and save your team!</h3>
            <div className="mb-2">Name <input onChange={inputHandler}></input></div>
            <div id="pokemon-types" style={{display:'flex', justifyContent:'center'}}>
                
                <span style={{marginRight: '2rem'}}>Choose a type: </span>
                <select ref ={inputRef} onChange={clickHandler}>
                {pokemonTypes.map((types) => {return <option value = {types}>{types.charAt(0).toUpperCase()+types.slice(1)}</option>})} 
                </select>

                </div>
                
                <div id="pokedex-slot">
                    {/* Is filteredPokemonArray is "true" or essentially has something in it, then it will populate the page with 
                        the pokemon that fuifill the filter requirement, however if it is empty then it will populate the page 
                        with just generally all pokemon from the initial call. 
                    */
                //    unclickedPokemonArray 
                        
                //         ? unclickedPokemonArray.map((pokemon) =>
                //         <PokemonCard
                //             name={pokemon.name}
                //             image={pokemon.image}
                //             type={pokemon.type}
                //             pokemonTeamHandler={pokemonTeamHandler}
                //         />)

                //         : pokemonArray.map((pokemon) =>
                //             <PokemonCard
                //                 name={pokemon.name}
                //                 image={pokemon.image}
                //                 type={pokemon.type}
                //                 pokemonTeamHandler={pokemonTeamHandler}
                //             />)
                renderPokemonOut()
                    
                    };
                    </div>

        </div>
    )
}

export default Home