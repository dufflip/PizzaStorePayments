import React, { useState } from "react";

import PizzaBG from "../images/pizza-2.jpg";

const Hero = () => {
  return (
    <div className="HeroContainer">
      <div className="HeroContent">
        <div className="HeroItems">
          <h1 className="HeroH1">Greatest Pizza Ever</h1>
          <p className="HeroP">Ready in 60 seconds</p>
          <button className="HeroBtn">Place Order</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
