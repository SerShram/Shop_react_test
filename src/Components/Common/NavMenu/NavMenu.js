import React from "react";
import {NavLink} from "react-router-dom";
import s from "./NavMenu.module.css"
import {useSelector} from "react-redux";

const NavMenu = () => {

    const isAdmin = useSelector(state => state.CatalogPage.user.admin);

    return (
        <ul className={s.navMenu}>
            <li>
                <NavLink exact to="/" activeClassName={s.selected}>Catalog</NavLink>
            </li>
            <li>
                {isAdmin
                    ? <NavLink to="/add" activeClassName={s.selected}>Add Product</NavLink>
                    : <NavLink to="/notice" activeClassName={s.selected}>Add Product</NavLink>
                }

            </li>
        </ul>
    )
}

export default NavMenu;