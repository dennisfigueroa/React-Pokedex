import React from 'react'
import {Container} from 'react-bootstrap';

function Team({ firstPokemon, setFirstPokemon, secondPokemon, setSecondPokemon, thirdPokemon, setThirdPokemon, fourthPokemon, setFourthPokemon, fifthPokemon, setFifthPokemon, sixthPokemon, setSixthPokemon, randomizeTeam, placeEgg }) {
    
   // try {
    // if (teamOne != '') { 
    //     console.log(`This is from the team component: ${teamOne}`);
    // }


    // useEffect(() => {
    //     if (teamOne) {
    //         setTeamMemberOne(teamOne);
    //     }
    // }, [teamOne]);

    // useEffect(() => {
    //     if (teamTwo) {
    //         setTeamMemberTwo(teamTwo);
    //     }
    // }, [teamTwo]);
    // useEffect(() => {
    //     if (teamThree) {
    //         setTeamMemberThree(teamThree);
    //     }
    // }, [teamThree]);
    // useEffect(() => {
    //     if (teamFour) {
    //         setTeamMemberFour(teamFour);
    //     }
    // }, [teamFour]);
    // useEffect(() => {
    //     if (teamFive) {
    //         setTeamMemberFifth(teamFive);
    //     }
    // }, [teamFive]);
    // useEffect(() => {
    //     if (teamSix) {
    //         setTeamMemberSixth(teamSix);
    //     }
    // }, [teamSix]);

 //   }
  //  catch (e) {
     //   console.log(`This is the error: ${e}`);
  //  }
    

    return (
        <Container className="justify-content-center align-items-center mb-5 mt-5" style={{ backgroundColor: '#f2f3f2', paddingBottom: '2.5rem', borderRadius:'2rem' }}>
            <div id="teamPokemon" className="d-flex">
                <img src={firstPokemon} style={{maxWidth:'190px'}} onClick={() => {placeEgg(firstPokemon, setFirstPokemon)}}/>
          
          
                <img src={secondPokemon} style={{maxWidth:'190px'}} onClick={() => {placeEgg(secondPokemon, setSecondPokemon)}}/>
         
      
                <img src={thirdPokemon} style={{maxWidth:'190px'}} onClick={() => {placeEgg(thirdPokemon, setThirdPokemon)}}/>
       
         
                <img src={fourthPokemon} style={{maxWidth:'190px'}} onClick={() => {placeEgg(fourthPokemon, setFourthPokemon)}}/>
           
                <img src={fifthPokemon} style={{maxWidth:'190px'}} onClick={() => {placeEgg(fifthPokemon, setFifthPokemon)}}/>
       
                <img src={sixthPokemon} style={{maxWidth:'190px'}} onClick={() => {placeEgg(sixthPokemon, setSixthPokemon)}}/>
      
                </div>
           <button onClick ={randomizeTeam} className="btn btn-primary mt-3">Random Team</button>
        </Container>
    )
}

export default Team
