import React from "react";
import { Link } from "react-router-dom";

import CartProductsPayment from "../CartPayments";
import CEPEnvio from "../CEPEnvio";
import CEPFaturamento from "../CEPFaturamento";

import Back from "../BackButton";

const FinalStep = () => {
  return (
    <>
      <section className="section-final-step">
        <div className="fat-final-step">
          <h2>Local de Faturamento</h2>
          <CEPFaturamento />
        </div>
        <div className="env-final-step">
          <h2>Local de Envio</h2>
          <CEPEnvio />
        </div>
      </section>
      <div className="products-final-step">
        <CartProductsPayment className="cart-final-step" />
      </div>
      {/* <Link to="/fourth-step">
        <Back />
      </Link> */}
    </>
  );
};

export default FinalStep;
