import React from "react";
import { useDispatch } from "react-redux";

import { ACTION_addToCart } from "../store/ducks/cart";

const Products = ({ heading, data }) => {
  const dispatch = useDispatch();

  return (
    <div className="ProductsContainer">
      <h1 className="ProductsHeading">{heading}</h1>
      <div className="ProductWrapper">
        {data.map((product, index) => {
          return (
            <div key={index} className="ProductCard">
              <img className="ProductImg" src={product.img} alt={product.alt} />
              <div className="ProductInfo">
                <h2 className="ProductTitle">{product.name}</h2>
                <p className="ProductDesc">{product.desc}</p>
                <p className="ProductPrice">{product.price}</p>
                <button
                  className="ProductButton"
                  onClick={() => dispatch(ACTION_addToCart(product))}
                >
                  {product.button}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
