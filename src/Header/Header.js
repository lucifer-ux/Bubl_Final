import React from "react";
import Logo from "../images/Bubl.svg";
import "../styles/styles.css";
import Navbar from './Navbar.js'
function Header() {
  return (
    <div className="menu">
      <div className="container">
        <div className="menu-wrapper">
          <a href="/" className="logo">
            <img src={Logo} />
          </a>
         <Navbar/>
        </div>
      </div>

     
    </div>
  );
}

export default Header;
