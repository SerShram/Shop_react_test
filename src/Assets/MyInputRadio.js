import React from 'react';

const MyInputRadio = ({name, value, checked, spanText, onChangeRole}) => {
    return (
        <label>
            <input
                type="radio"
                name={name}
                value={value}
                checked={checked}
                onChange={onChangeRole}
            />
            <span>{spanText}</span>
        </label>
    );
};

export default MyInputRadio;