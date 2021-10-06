import React from 'react';
import { NavLink } from "react-router-dom";

import '../css/NavBar.css'

const NavBar = () => {
    return (
        <div className={"navbar"}>
            <NavLink exact activeStyle={{color: '#D1DB4A'}} to='/' className="navbarText">
                Home
            </NavLink>

            <NavLink exact activeStyle={{color: '#D1DB4A'}} to='/episodes' className="navbarText">
                Episodes
            </NavLink>

            <NavLink exact activeStyle={{color: '#D1DB4A'}} to='/favorites' className="navbarText">
                Favorites
            </NavLink>
        </div>
    );
}

export default NavBar;
