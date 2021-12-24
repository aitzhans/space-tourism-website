import React from "react";
import { Link, Outlet } from "react-router-dom";

import "./CrewPage.scss";
import douglas from "./image-douglas-hurley.webp";
import mark from "./image-mark-shuttleworth.webp";
import viktor from "./image-victor-glover.webp";
import anoushen from "./image-anousheh-ansari.webp";

const CrewPage = () => {
  const handleCrewClick = (e) => {
    if (e.target.tagName !== "UL") {
      const menuItems = document.querySelectorAll(".crew__item");
      menuItems.forEach((item) => item.classList.remove("crew__item--active"));
      e.target.classList.add("crew__item--active");

      const allImgs = document.querySelectorAll(".crew__img");
      allImgs.forEach((item) => {
        if (item.dataset.label === e.target.dataset.label) {
          item.classList.add("crew__img--visible");
        } else {
          item.classList.remove("crew__img--visible");
        }
      });
    }
  };

  return (
    <main className="crew__container">
      <h5 className="inner__subheader">
        <span className="inner__subheader--num">02</span>Meet your crew
      </h5>
      <div className="crew__img-container ">
        <img
          className="crew__img  crew__img--visible"
          src={douglas}
          alt="Douglas Hurley"
          data-label="douglas"
        />
        <img
          className="crew__img"
          src={mark}
          alt="Mark Shuttleworth"
          data-label="mark"
        />
        <img
          className="crew__img"
          src={viktor}
          alt="Victor Glover"
          data-label="viktor"
        />
        <img
          className="crew__img"
          src={anoushen}
          alt="Anousheh Ansari"
          data-label="anoushen"
        />
      </div>
      <ul className="crew__list" onClick={handleCrewClick}>
        <Link
          to="douglas"
          className="crew__item  crew__item--active"
          data-label="douglas"
        >
          Douglas
        </Link>
        <Link to="mark" className="crew__item" data-label="mark">
          Mark
        </Link>
        <Link to="viktor" className="crew__item" data-label="viktor">
          Viktor
        </Link>
        <Link to="anoushen" className="crew__item" data-label="anoushen">
          Anoushen
        </Link>
      </ul>
      <Outlet />
    </main>
  );
};

export default CrewPage;
