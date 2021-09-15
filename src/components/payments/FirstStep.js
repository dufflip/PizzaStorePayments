import React from "react";

import { Link } from "react-router-dom";

import Back from "../BackButton";

import CartProductsPayment from "../CartPayments";

const FirstStep = () => {
  return (
    <>
      <div className="container-FS">
        <ul className="stages-FS">
          <li className="stage-FS">1</li>
          <li>2</li>
          <li>3</li>
          <li className="final-stage-grey-FS">4</li>
        </ul>
      </div>
      <CartProductsPayment className="container-products-FS" />
      <Link to="/">
        <Back />
      </Link>
    </>
  );
};

export default FirstStep;
