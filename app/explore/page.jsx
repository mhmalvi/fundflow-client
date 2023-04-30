'use client'
import React from 'react'
import Navbar from '../shared/navbar/page'
import ExploreFilter from './exploreFilter'
import ExploreGallery from './exploreGallery'
import Footer from '../shared/footer'

const ExploreLayout = () => {
  return (
    <>
    <Navbar/>
    <ExploreFilter/>
    <ExploreGallery/>
    <Footer/>
    </>
  )
}

export default ExploreLayout