import React from 'react';
import spinner from './Images/spinner.svg'

const Preloader = () => {
    return (
        <div className="preloader">
            <img src={spinner} alt="spinner"/>
        </div>
    );
};

export default Preloader;