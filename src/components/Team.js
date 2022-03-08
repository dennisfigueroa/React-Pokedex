import React, {useEffect, useState} from 'react'
import {Container} from 'react-bootstrap';

function Team({ teamOne, teamTwo, teamThree, teamFour, teamFive, teamSix }) {
    const pokemonEgg = require('../assets/pokemonEgg.png');

    const [teamMemberOne, setTeamMemberOne] = useState(pokemonEgg)
    const [teamMemberTwo, setTeamMemberTwo] = useState(pokemonEgg)
    const [teamMemberThree, setTeamMemberThree] = useState(pokemonEgg)
    const [teamMemberFour, setTeamMemberFour] = useState(pokemonEgg)
    const [teamMemberFifth, setTeamMemberFifth] = useState(pokemonEgg)
    const [teamMemberSixth, setTeamMemberSixth] = useState(pokemonEgg)
    

   // try {
    // if (teamOne != '') { 
    //     console.log(`This is from the team component: ${teamOne}`);
    // }


    useEffect(() => {
        if (teamOne) {
            setTeamMemberOne(teamOne);
        }
    }, [teamOne]);

    useEffect(() => {
        if (teamTwo) {
            setTeamMemberTwo(teamTwo);
        }
    }, [teamTwo]);
    useEffect(() => {
        if (teamThree) {
            setTeamMemberThree(teamThree);
        }
    }, [teamThree]);
    useEffect(() => {
        if (teamFour) {
            setTeamMemberFour(teamFour);
        }
    }, [teamFour]);
    useEffect(() => {
        if (teamFive) {
            setTeamMemberFifth(teamFive);
        }
    }, [teamFive]);
    useEffect(() => {
        if (teamSix) {
            setTeamMemberSixth(teamSix);
        }
    }, [teamSix]);

 //   }
  //  catch (e) {
     //   console.log(`This is the error: ${e}`);
  //  }
    

    return (
        <Container className="d-flex justify-content-center align-items-center mb-5 mt-5" style={{ backgroundColor: '#f2f3f2', paddingBottom: '2.5rem', borderRadius:'2rem' }}>
            <div>
                <img src={teamMemberOne} style={{maxWidth:'190px'}} />
            </div>
            <div>
                <img src={teamMemberTwo} style={{maxWidth:'190px'}}/>
            </div>
            <div>
                <img src={teamMemberThree} style={{maxWidth:'190px'}}/>
            </div>
            <div>
                <img src={teamMemberFour} style={{maxWidth:'190px'}}/>
            </div>
            <div>
                <img src={teamMemberFifth} style={{maxWidth:'190px'}}/>
            </div>
            <div>
                <img src={teamMemberSixth} style={{maxWidth:'190px'}}/>
            </div>
        </Container>
    )
}

export default Team
