import React from 'react'
import Navbar from '../../shared/navbar/page'
import BlogDetails from './blogdetails'
import Footer from '../../shared/footer'

const BlogDetailsLayout = () => {
  return (
    <>
      <Navbar />
      <BlogDetails />
      <Footer />
    </>
  );
}

export default BlogDetailsLayout;