import React from 'react';
import { NavLink } from "react-router-dom";

// import '../css/NavBar.css'

const NavBar = () => {
    return (
        <div className={"navbar"}>
            <NavLink exact activeStyle={{color: '#009fb7'}} to='/' className="navbarText">
                Home
            </NavLink>

            <NavLink exact activeStyle={{color: '#009fb7'}} to='/about' className="navbarText">
                About
            </NavLink>

            <NavLink exact activeStyle={{color: '#009fb7'}} to='/profile' className="navbarText">
                Profile
            </NavLink>

            <NavLink exact activeStyle={{color: '#009fb7'}} to='/store' className="navbarText">
                Store
            </NavLink>
        </div>
    );
}

export default NavBar;
