import React from 'react';
import { NavLink } from "react-router-dom";

import '../css/NavBar.css'

const NavBar = () => {
    return (
        <div className={"navbar"}>
            <NavLink exact activeStyle={{color: '#009fb7'}} to='/' className="navbarText">
                Home
            </NavLink>

            <NavLink exact activeStyle={{color: '#009fb7'}} to='/episodes' className="navbarText">
                Episodes
            </NavLink>

            <NavLink exact activeStyle={{color: '#009fb7'}} to='/favorites' className="navbarText">
                Favorites
            </NavLink>
        </div>
    );
}

export default NavBar;
