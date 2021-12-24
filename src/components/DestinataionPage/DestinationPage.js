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
      if (item.dataset.label === e.target.dataset.label) {
        item.classList.add("dest__img--visible");
      } else {
        item.classList.remove("dest__img--visible");
      }
    });
  };

  return (
    <main className="dest__container">
      <h5 className="inner__subheader">
        <span className="inner__subheader--num">01</span>Pick your destination
      </h5>
      <div className="dest__main">
        <div className="dest__img-container ">
          <img
            className="dest__img  dest__img--visible"
            src={moon}
            alt="Moon"
            data-label="moon"
          />
          <img className="dest__img" src={mars} alt="Mars" data-label="mars" />
          <img
            className="dest__img"
            src={europa}
            alt="Europa"
            data-label="europa"
          />
          <img
            className="dest__img"
            src={titan}
            alt="Titan"
            data-label="titan"
          />
        </div>
        <div className="dest__left">
          <ul className="dest__list" onClick={handleDestinationsClick}>
            <Link
              to="moon"
              className="dest__item  dest__item--active"
              data-label="moon"
            >
              Moon
            </Link>
            <Link to="mars" className="dest__item" data-label="mars">
              Mars
            </Link>
            <Link to="europa" className="dest__item" data-label="europa">
              Europa
            </Link>
            <Link to="titan" className="dest__item" data-label="titan">
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
