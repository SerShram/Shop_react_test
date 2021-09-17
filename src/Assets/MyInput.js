import React from 'react';

const MyInput = ({type, currentFunc, value, placeHolder}) => {

    return (
        <label>
            <input type={type}
                   onChange={event => currentFunc(event.target.value)}
                   value={value}
                   placeholder={placeHolder}
            />
        </label>
    );
};

export default MyInput;