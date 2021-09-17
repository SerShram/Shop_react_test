import React from "react";

const MyButton = ({text, func}) => {
    return(
        <button
            onClick={(event) => {event.preventDefault();func();}}>
            {text}
        </button>
    )
}

export default MyButton;