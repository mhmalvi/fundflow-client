import React from "react";
import Navbar from "../../shared/navbar/page";
import ProductHeader from "./productHeader";
import ProductTabs from "./productTabs";
import Footer from "../../shared/footer";

const ProductLayout = () => {
  return (
    <>
      <Navbar/>
      <ProductHeader/>
      <ProductTabs/>
      <Footer/>
    </>
  );
};

export default ProductLayout;
