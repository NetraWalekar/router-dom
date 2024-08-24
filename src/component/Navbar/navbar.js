import React from "react";
import './navbar.css'
import { Link } from "react-router-dom";
function Navbar(){
    return(
        <nav className="navbar">
            <Link to ='/' className="ele">Home</Link>
            <Link to='/about' className="ele">About</Link>
            <Link to='/contact' className="ele">Contact</Link>
        </nav>
    )
}
export default Navbar;