import React from "react";
import './GenericButton.css'

const GenericButton =  ({texto, onClick, css}) => {
    return(
        <button onClick={onClick} className={`button-generic ${css}`}>
            {texto}
        </button>
    )
}

export default GenericButton