import React from "react";
import {NavLink} from "react-router-dom";
import s from "./NavMenu.module.css"

const NavMenu = () => {
    return (
        <ul className={s.navMenu}>
            <li>
                <NavLink exact to="/" activeClassName={s.selected}>Catalog</NavLink>
            </li>
            <li>
                <NavLink to="/add" activeClassName={s.selected}>Add Product</NavLink>
            </li>
        </ul>
    )
}

export default NavMenu;