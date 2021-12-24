import React, { useRef } from "react";

import logo from "./logo.svg";
import "./Header.scss";

const Header = () => {
  const toggleRef = useRef(null);
  const navRef = useRef(null);

  const handleToggleClick = () => {
    navRef.current.classList.toggle("header__nav--close");
    toggleRef.current.classList.toggle("header__toggle-inner--close");
  };
  return (
    <header className="header__container">
      <div className="header__logo">
        <img src={logo} width="40" height="40" />
      </div>
      <div className="header__toggle-btn">
        <div
          ref={toggleRef}
          className="header__toggle-inner"
          onClick={handleToggleClick}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <nav ref={navRef} className="header__nav">
        <ul className="header__nav-list">
          <li className="header__nav-item  header__nav-item--active">
            <span className="header__nav-number">00</span>HOME
          </li>
          <li className="header__nav-item">
            <span className="header__nav-number">01</span>DESTINATION
          </li>
          <li className="header__nav-item">
            <span className="header__nav-number">02</span>CREW
          </li>
          <li className="header__nav-item">
            <span className="header__nav-number">03</span>TECHNOLOGY
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
