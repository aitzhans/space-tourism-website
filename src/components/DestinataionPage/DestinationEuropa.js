import React from "react";

const DestinationMars = () => {
  return (
    <>
      <h3 className="dest__header">EUROPA</h3>
      <p className="dest__text">
        The smallest of the four Galilean moons orbiting Jupiter, Europa is a
        winter lover’s dream. With an icy surface, it’s perfect for a bit of ice
        skating, curling, hockey, or simple relaxation in your snug wintery
        cabin.
      </p>

      <div className="dest__numbers-container">
        <div className="dest__numbers">
          <h6 className="dest__numbers-title">AVG. DISTANCE</h6>
          <p className="dest__numbers-val">628 MIL. km</p>
        </div>
        <div className="dest__numbers">
          <h6 className="dest__numbers-title">Est. travel time</h6>
          <p className="dest__numbers-val">3 years</p>
        </div>
      </div>
    </>
  );
};

export default DestinationMars;
