import React from 'react'
import Navbar from '../shared/navbar/page'
import CreateProject from './createProject'
import Footer from '../shared/footer'

const ProjectLayout = () => {
  return (
    <>
      <Navbar />
      <CreateProject />
      <Footer />
    </>
  );
}

export default ProjectLayout