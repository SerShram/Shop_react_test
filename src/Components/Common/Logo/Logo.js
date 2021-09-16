import React from "react";
import {NavLink} from "react-router-dom";
import logo from "../../../logo.svg"


const Logo = () => {
    return (
        <NavLink to="/">
            <img src={logo} className="App-logo" alt="logo" />
        </NavLink>
    )
}

export default Logo;