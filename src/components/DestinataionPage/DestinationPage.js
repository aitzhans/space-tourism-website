import React from "react";
import { Link, Outlet } from "react-router-dom";

import "./DestinationPage.scss";
import moon from "./image-moon.webp";
import titan from "./image-titan.webp";
import mars from "./image-mars.webp";
import europa from "./image-europa.webp";

const DestinationPage = () => {
  const handleDestinationsClick = (e) => {
    const menuItems = document.querySelectorAll(".dest__item");
    menuItems.forEach((item) => item.classList.remove("dest__item--active"));
    e.target.classList.add("dest__item--active");

    const allImgs = document.querySelectorAll(".dest__img");
    allImgs.forEach((item) => {
      if (item.ariaLabel === e.target.ariaLabel) {
        item.classList.add("dest__img--visible");
      } else {
        item.classList.remove("dest__img--visible");
      }
    });
  };

  return (
    <main className="dest__container">
      <h5 className="dest__subheader">
        <span className="dest__subheader--num">01</span>Pick your destination
      </h5>
      <div className="dest__main">
        <div className="dest__img-container ">
          <img
            className="dest__img  dest__img--visible"
            src={moon}
            alt="Moon"
            aria-label="moon"
          />
          <img className="dest__img" src={mars} alt="Mars" aria-label="mars" />
          <img
            className="dest__img"
            src={europa}
            alt="Europa"
            aria-label="europa"
          />
          <img
            className="dest__img"
            src={titan}
            alt="Titan"
            aria-label="titan"
          />
        </div>
        <div className="dest__left">
          <ul className="dest__list" onClick={handleDestinationsClick}>
            <Link
              to="moon"
              className="dest__item  dest__item--active"
              aria-label="moon"
            >
              Moon
            </Link>
            <Link to="mars" className="dest__item" aria-label="mars">
              Mars
            </Link>
            <Link to="europa" className="dest__item" aria-label="europa">
              Europa
            </Link>
            <Link to="titan" className="dest__item" aria-label="titan">
              Titan
            </Link>
          </ul>
          <Outlet />
        </div>
      </div>
    </main>
  );
};

export default DestinationPage;
