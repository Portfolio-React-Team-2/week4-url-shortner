import React from "react";
import "./sidedrawer.css";


const Sidedrawer = () => {
    return (
        <div className="sidebar">
            <nav className="sidebarmenu">
                <ul>
                    <li><a href="/">Login</a></li>
                    <li><a href="/">Sign up </a></li>
                </ul>
            </nav>
        </div>
    );
};

export default Sidedrawer;
