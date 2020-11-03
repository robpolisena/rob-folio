import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/rob-logo-v2.png";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);

  return (
    <>
      {/* Logo is centered because of navbar justify content center */}
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            <img className="logo fab fa-typo3" src={Logo} alt="Rob Logo" />
          </Link>
          <div className="menu-icon">
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
