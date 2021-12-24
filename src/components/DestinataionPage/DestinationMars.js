import React from "react";

const DestinationMars = () => {
  return (
    <>
      <h3 className="dest__header">Mars</h3>
      <p className="dest__text">
        Don’t forget to pack your hiking boots. You’ll need them to tackle
        Olympus Mons, the tallest planetary mountain in our solar system. It’s
        two and a half times the size of Everest!
      </p>

      <div className="dest__numbers-container">
        <div className="dest__numbers">
          <h6 className="dest__numbers-title">AVG. DISTANCE</h6>
          <p className="dest__numbers-val">225 MIL. km</p>
        </div>
        <div className="dest__numbers">
          <h6 className="dest__numbers-title">Est. travel time</h6>
          <p className="dest__numbers-val">9 months</p>
        </div>
      </div>
    </>
  );
};

export default DestinationMars;
