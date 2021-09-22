import React from "react";
import s from "./Header.module.css";
import "./Header.module.css"
import NavMenu from "../NavMenu/NavMenu";
import Logo from "../Logo/Logo";
import Roles from "../Roles/Roles";
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <header>
            <div className="container">
                <div className={s.header_wrap}>
                    <NavLink to="/">
                        <Logo/>
                    </NavLink>
                    <NavMenu/>
                    <Roles/>
                </div>
            </div>
        </header>
    )
}

export default Header;