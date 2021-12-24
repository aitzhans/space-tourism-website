import React from "react";

import "./HomePage.scss";

const HomePage = () => {
  return (
    <main className="main__container">
      <h5 className="main__subheader">SO, YOU WANT TO TRAVEL TO</h5>
      <h1 className="main__header">Space</h1>
      <p className="main__text">
        Let’s face it; if you want to go to space, you might as well genuinely
        go to outer space and not hover kind of on the edge of it. Well sit
        back, and relax because we’ll give you a truly out of this world
        experience!
      </p>
      <button className="main__btn">EXPLORE</button>
    </main>
  );
};

export default HomePage;
