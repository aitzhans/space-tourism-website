import React, { useRef } from "react";
import { Link } from "react-router-dom";

import { handleMenuItems } from "../utils";
import logo from "./logo.svg";
import "./Header.scss";

const Header = () => {
  const toggleRef = useRef(null);
  const navRef = useRef(null);
  const handleToggleClick = () => {
    navRef.current.classList.toggle("header__nav--close");
    toggleRef.current.classList.toggle("header__toggle-inner--close");
  };

  const handleMenuItemClick = (e) => {
    handleMenuItems(e.target.dataset.link);
    handleToggleClick();
  };

  return (
    <header className="header__container">
      <Link
        to="/"
        className="header__logo"
        onMouseDown={() => handleMenuItems("home")}
      >
        <img src={logo} width="40" height="40" alt="logo" />
      </Link>
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
        <ul className="header__nav-list" onClick={handleMenuItemClick}>
          <Link
            to="/"
            className="header__nav-item  header__nav-item--active"
            data-link="home"
          >
            <span className="header__nav-number">00</span>HOME
          </Link>
          <Link
            to="/destination"
            className="header__nav-item"
            data-link="destination"
          >
            <span className="header__nav-number">01</span>DESTINATION
          </Link>
          <Link to="/crew" className="header__nav-item" data-link="crew">
            <span className="header__nav-number">02</span>CREW
          </Link>
          <Link
            to="/technology"
            className="header__nav-item"
            data-link="technology"
          >
            <span className="header__nav-number">03</span>TECHNOLOGY
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
