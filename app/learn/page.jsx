import React from 'react'
import Navbar from '../shared/navbar/page'
import LearnHeader from './learnHeader'
import LearnContent from './learnContent'
import Footer from '../shared/footer'

const page = () => {
  return (
    <>
      <Navbar/>
      <LearnHeader/>
      <LearnContent/>
      <Footer/>
    </>
  )
}

export default page
