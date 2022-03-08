import React from 'react';
import {Link} from 'react-router-dom';

function navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{ padding:"1rem 1.5rem"}}>
            <a className="navbar-brand" href="#"><img src={require('../assets/pokemon.png')} style={{maxWidth: '300px', flex:'1'}}/></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav" style={{justifyContent:"flex-end"}}>

                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <Link to="/"><a className="nav-link" style={{ marginRight: "100px" }}>Home <span className="sr-only">(current)</span></a></Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/login"><a className="nav-link" style={{ marginRight: "100px" }}>Login</a></Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/register"><a className="nav-link" style={{ marginRight: "100px" }}>Register</a></Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default navbar