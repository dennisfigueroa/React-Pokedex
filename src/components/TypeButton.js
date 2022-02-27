import React from 'react'

function TypeButton({type}) {
    
    const clickHandler = () => {
        console.log({type})
    }
    
    return (
        <button onClick={clickHandler}>
        {type}
        </button>
    )
}

export default TypeButton;
