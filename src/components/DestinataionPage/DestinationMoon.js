import React from "react";

const DestinationMoon = () => {
  return (
    <>
      <h3 className="dest__header">Moon</h3>
      <p className="dest__text">
        See our planet as you’ve never seen it before. A perfect relaxing trip
        away to help regain perspective and come back refreshed. While you’re
        there, take in some history by visiting the Luna 2 and Apollo 11 landing
        sites.
      </p>

      <div className="dest__numbers">
        <h6 className="dest__numbers-title">AVG. DISTANCE</h6>
        <p className="dest__numbers-val">384,400 km</p>
      </div>
      <div className="dest__numbers">
        <h6 className="dest__numbers-title">Est. travel time</h6>
        <p className="dest__numbers-val">3 days</p>
      </div>
    </>
  );
};

export default DestinationMoon;
