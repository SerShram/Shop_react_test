import React from 'react';

const MyTextarea = ({currentFunc, value, placeHolder}) => {
    return (
        <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            onChange={event => currentFunc(event.target.value)}
            value={value}
            placeholder={placeHolder}
        >
        </textarea>
    );
};

export default MyTextarea;