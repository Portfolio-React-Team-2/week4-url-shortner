import React from "react";
import "./navbar.css";

const Navbar = props => {
    return (
        <div className="navbar">
            <header className="header">
                <a href="/" className="logo">FE-TEAM2</a>
                <div id="menu-btn" className="fas fa-bars" onClick={props.drawerClickHandler} />
                <nav className="nav-menu">
                    <a href="/">Login</a>
                    <a href="/" className="sign">Sign up</a>
                </nav>
            </header>
        </div>
    )
};

export default Navbar;
