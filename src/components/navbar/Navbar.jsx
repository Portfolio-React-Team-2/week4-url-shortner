import React from "react";
import "./navbar.js";
import NavStyles from "./navbar.js";

const Navbar = (props) => {
  return (
    <NavStyles>
      <header className="header">
        <a href="/" className="logo">
          FE-TEAM2
        </a>
        <div
          id="menu-btn"
          className="fas fa-bars"
          onClick={props.drawerClickHandler}
        />
        <nav className="nav-menu">
          <a href="/">Login</a>
          <a href="/" className="sign">
            Sign up
          </a>
        </nav>
      </header>
    </NavStyles>
  );
};

export default Navbar;
