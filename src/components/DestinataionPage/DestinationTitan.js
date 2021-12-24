import React from "react";

const DestinationMars = () => {
  return (
    <>
      <h3 className="dest__header">TITAN</h3>
      <p className="dest__text">
        The only moon known to have a dense atmosphere other than Earth, Titan
        is a home away from home (just a few hundred degrees colder!). As a
        bonus, you get striking views of the Rings of Saturn.
      </p>

      <div className="dest__numbers">
        <h6 className="dest__numbers-title">AVG. DISTANCE</h6>
        <p className="dest__numbers-val">1.6 BIL. km</p>
      </div>
      <div className="dest__numbers">
        <h6 className="dest__numbers-title">Est. travel time</h6>
        <p className="dest__numbers-val">7 years</p>
      </div>
    </>
  );
};

export default DestinationMars;
