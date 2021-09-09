import React from "react";

import Hero from "../components/Hero";
import Products from "../components/Products";
import Feature from "../components/Feature";
import Footer from "../components/Footer";
import Cart from "../components/cart/Cart";

import {
  productData,
  productDataTwo,
} from "../components/products/productsData";

const Home = () => {
  return (
    <>
      <Hero />
      <Products heading="Choose your favorite" data={productData} />
      <Feature />
      <Products heading="Sweet Treats for You" data={productDataTwo} />
      <Cart />
      <Footer />
    </>
  );
};

export default Home;
