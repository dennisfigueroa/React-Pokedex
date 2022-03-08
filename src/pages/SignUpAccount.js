import React from 'react'
import Navbar from '../components/Navbar';
import SignUp from '../components/SignUp'; 
import {Container} from 'react-bootstrap';
function SignUpAccount() {
    return (
        <div>
            <Navbar />
            <Container className="d-flex align-items-center justify-content-center" style={{ minHeight:'60vh'}}>
                <div className="w-100" style={{maxWidth:'400px'}}>
            <SignUp/>
            </div>
            </Container>
        </div>
    )
}

export default SignUpAccount
