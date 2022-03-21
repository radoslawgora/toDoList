import React from "react";
import "./Header.css";
import logo from "../../../src/logo.png";

const Header = () => {
    return(
        <div className="header_wrapper">
            <img className="logo" src={logo} />
            <h1>To-do-app</h1>
        </div>
        
    )
};

export default Header;