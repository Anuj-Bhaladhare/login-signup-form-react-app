import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return(
        <div className="flex flex-row justify-around items-center">
            <h2>
                <NavLink to="/">LOGO</NavLink>
            </h2>
            <div className="flex flex-row gap-2">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/dashboard">Dashboard</NavLink>
            </div> 
            <div className="flex flex-row gap-2">
                <NavLink to="/loginform">Login</NavLink>
                <NavLink to="/signform">Sign Up</NavLink>
            </div>
        </div>
    )
}

export default Navbar;