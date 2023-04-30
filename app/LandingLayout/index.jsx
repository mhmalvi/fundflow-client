'use client'
import React from 'react'
import Header from "./header";
import Business from "./business";
import About from "./about";
import HowItWorks from "./howItWorks";
import Investors from '../shared/investors';
import Accolades from "./accolades";
import Articles from "../shared/Article/articles";

const LandingPage = () => {
  return (
    <>
      <Header />
      <Business />
      <About />
      <HowItWorks />
      <Investors/>
      <Accolades />
      <Articles />
    </>
  );
}

export default LandingPage