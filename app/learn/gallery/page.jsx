'use client'
import React from 'react'
import Navbar from '../../shared/navbar/page'
import GalleryHeader from './galleryHeader'
import LearnGallery from "./learnGallery";
import Footer from '../../shared/footer'

const ExploreLayout = () => {
  return (
    <>
      <Navbar />
      <GalleryHeader />
      <LearnGallery />
      <Footer />
    </>
  );
}

export default ExploreLayout