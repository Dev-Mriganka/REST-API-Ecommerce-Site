import React from "react";
import Navbar from "./general/Navbar";
import Test from "./general/Test";
import ProductList from "./product/ProductList";

const Home = () => {
  return (
    <div>
      <Test/>
      <Navbar />
      <ProductList />
    </div>
  );
};

export default Home;
