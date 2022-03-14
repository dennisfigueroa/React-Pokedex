import React, {useEffect, useState} from 'react'
import {Container} from 'react-bootstrap';

function Team({ firstPokemon, setFirstPokemon, secondPokemon, setSecondPokemon, thirdPokemon, setThirdPokemon, fourthPokemon, setFourthPokemon, fifthPokemon, setFifthPokemon, sixthPokemon, setSixthPokemon, removeTeamMember, placeEgg }) {
    
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
        <Container className="d-flex justify-content-center align-items-center mb-5 mt-5" style={{ backgroundColor: '#f2f3f2', paddingBottom: '2.5rem', borderRadius:'2rem' }}>
            <div>
                <img src={firstPokemon} style={{maxWidth:'190px'}} onClick={() => {placeEgg(firstPokemon, setFirstPokemon)}}/>
            </div>
            <div>
                <img src={secondPokemon} style={{maxWidth:'190px'}} onClick={() => {placeEgg(secondPokemon, setSecondPokemon)}}/>
            </div>
            <div>
                <img src={thirdPokemon} style={{maxWidth:'190px'}} onClick={() => {placeEgg(thirdPokemon, setThirdPokemon)}}/>
            </div>
            <div>
                <img src={fourthPokemon} style={{maxWidth:'190px'}} onClick={() => {placeEgg(fourthPokemon, setFourthPokemon)}}/>
            </div>
            <div>
                <img src={fifthPokemon} style={{maxWidth:'190px'}} onClick={() => {placeEgg(fifthPokemon, setFifthPokemon)}}/>
            </div>
            <div>
                <img src={sixthPokemon} style={{maxWidth:'190px'}} onClick={() => {placeEgg(sixthPokemon, setSixthPokemon)}}/>
            </div>
        </Container>
    )
}

export default Team
