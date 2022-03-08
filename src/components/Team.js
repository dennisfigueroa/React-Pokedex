import React, {useState} from 'react'
import {Container} from 'react-bootstrap';

function Team() {
    const pokemonEgg = require('../assets/pokemonEgg.png');

    const [teamMemberOne, setTeamMemberOne] = useState(pokemonEgg);
    const [teamMemberTwo, setTeamMemberTwo] = useState(pokemonEgg)
    const [teamMemberThree, setTeamMemberThree] = useState(pokemonEgg)
    const [teamMemberFour, setTeamMemberFour] = useState(pokemonEgg)
    const [teamMemberFifth, setTeamMemberFifth] = useState(pokemonEgg)
    const [teamMemberSixth, setTeamMemberSixth] = useState(pokemonEgg)

    return (
        <Container className="d-flex justify-content-center align-items-center mb-5 mt-5" style={{ backgroundColor: '#f2f3f2', paddingBottom: '2.5rem', borderRadius:'2rem' }}>
            <div>
                <img src={teamMemberOne} />
            </div>
            <div>
                <img src={teamMemberTwo} />
            </div>
            <div>
                <img src={teamMemberThree} />
            </div>
            <div>
                <img src={teamMemberFour} />
            </div>
            <div>
                <img src={teamMemberFifth} />
            </div>
            <div>
                <img src={teamMemberSixth} />
            </div>
        </Container>
    )
}

export default Team
