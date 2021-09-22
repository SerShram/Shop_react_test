import React from "react";
import s from "./Roles.module.css"
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";

const Roles = () => {

    const user = useSelector(state => state.CatalogPage.user)

    return (
        <NavLink to="/user-role" activeClassName={s.selected}>
            <span className={s.roles}>
                <span className={s.name}>
                    {user.name ? user.name : 'No name'}
                </span>

                {user.admin &&
                <span className={s.role}>Administrator</span>
                }
            </span>
        </NavLink>
    )
}

export default Roles;