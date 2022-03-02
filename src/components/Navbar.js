import React from 'react'

function navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{ padding:"1rem 1.5rem"}}>
            <a className="navbar-brand" href="#" style={{fontSize: '2rem'}}>Pokedex</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav" style={{justifyContent:"flex-end"}}>
                
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link" style={{marginRight: "100px"}}>Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" style={{marginRight: "100px"}}>Login</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" style={{marginRight: "100px"}}>Register</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default navbar