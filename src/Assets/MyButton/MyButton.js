import React from "react";

const MyButton = ({text, func}) => {
    return(
        <button onClick={() => func()}>{text}</button>
    )
}

export default MyButton;