import React from "react";
import { Link } from "react-router-dom";

import "./NotFound.scss";

const NotFoundPage = () => {
  return (
    <main className="not-found__container">
      <h3 className="not-found__header">There is nothing here!</h3>
      {/* <p className="not-found__text">
        But you can go to the HomePage and start you journey from there!
      </p> */}
      <Link to="/" className="not-found__btn">
        BACK TO HOME
      </Link>
    </main>
  );
};

export default NotFoundPage;
