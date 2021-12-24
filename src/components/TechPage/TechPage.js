import React from "react";
import { Link, Outlet } from "react-router-dom";

import "./TechPage.scss";
import launchHor from "./image-launch-vehicle-landscape.jpg";
import launchVert from "./image-launch-vehicle-portrait.jpg";
import spaceportHor from "./image-spaceport-landscape.jpg";
import spaceportVert from "./image-spaceport-portrait.jpg";
import capsuleHor from "./image-space-capsule-landscape.jpg";
import capsuleVert from "./image-space-capsule-portrait.jpg";

const TechPage = () => {
  const isDesktop = window.innerWidth > 1024;

  const handleCrewClick = (e) => {
    if (e.target.tagName !== "UL") {
      const menuItems = document.querySelectorAll(".tech__item");
      menuItems.forEach((item) => item.classList.remove("tech__item--active"));
      e.target.classList.add("tech__item--active");

      const allImgs = document.querySelectorAll(".tech__img");
      allImgs.forEach((item) => {
        if (item.dataset.label === e.target.dataset.label) {
          item.classList.add("tech__img--visible");
        } else {
          item.classList.remove("tech__img--visible");
        }
      });
    }
  };

  return (
    <main className="tech__container">
      <h5 className="inner__subheader  tech__subheader">
        <span className="inner__subheader--num">03</span>SPACE LAUNCH 101
      </h5>
      <div className="tech__main">
        <div className="tech__img-container ">
          <img
            className="tech__img  tech__img--visible"
            src={isDesktop ? launchVert : launchHor}
            alt="LAUNCH VEHICLE"
            data-label="launch"
          />
          <img
            className="tech__img"
            src={isDesktop ? spaceportVert : spaceportHor}
            alt="SPACEPORT"
            data-label="spaceport"
          />
          <img
            className="tech__img"
            src={isDesktop ? capsuleVert : capsuleHor}
            alt="SPACE CAPSULE"
            data-label="capsule"
          />
        </div>
        <ul className="tech__list" onClick={handleCrewClick}>
          <Link
            to="launch"
            className="tech__item  tech__item--active"
            data-label="launch"
          >
            1
          </Link>
          <Link to="spaceport" className="tech__item" data-label="spaceport">
            2
          </Link>
          <Link to="capsule" className="tech__item" data-label="capsule">
            3
          </Link>
        </ul>
        <Outlet />
      </div>
    </main>
  );
};

export default TechPage;
