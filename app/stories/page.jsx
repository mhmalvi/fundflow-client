import React from "react";
import Navbar from "../shared/navbar/page";
import StoriesGallery from "./storiesGallery";
import Footer from "../shared/footer";

const StoriesLayout = () => {
  return (
    <>
      <Navbar />
      <StoriesGallery />
      <Footer />
    </>
  );
};

export default StoriesLayout;
