import React from "react";
import "../style.css";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  return (
    <div className="nav">
      <div className="nav__container">
        <div className="nav__logo">
          <h2>Architects</h2>
        </div>
        <div className="nav__links">
          <span className="link active__nav">
            <a className="active__nav" href="/">
              Home
            </a>
          </span>
          <span className="link">
            <a href="/">About</a>
          </span>
          <span className="link">
            <a href="/">Contact</a>
          </span>
          <span className="link">
            <a href="/">Collection</a>
          </span>
          <span className="link">
            <GiHamburgerMenu />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
