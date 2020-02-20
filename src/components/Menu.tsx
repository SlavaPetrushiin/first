import React from "react";
import {NavLink} from "react-router-dom";

const Menu = () => {
    return (
        <div>
            <NavLink to={'/login'}>Login</NavLink>
            <NavLink to={'/profile'}>Profile</NavLink>
            <NavLink to={'/register'}>Register</NavLink>
            <NavLink to={'/recovery'}>Recovery</NavLink>
        </div>
    )
}

export default Menu