import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/rob-logo-v2.png";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      {/* Logo is centered because of navbar justify content center */}
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            <img className="logo fab fa-typo3" src={Logo} alt="Rob Logo" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav=links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav=links" onClick={closeMobileMenu}>
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/skills"
                className="nav=links"
                onClick={closeMobileMenu}
              >
                Skills
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/projects"
                className="nav=links"
                onClick={closeMobileMenu}
              >
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/contact"
                className="nav=links"
                onClick={closeMobileMenu}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

//TRVL <i className="fab fa-typo3" />
