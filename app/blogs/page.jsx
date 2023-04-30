import React from 'react';
import Navbar from '../shared/navbar/page';
import BlogGallery from './blogGallery';
import Footer from '../shared/footer';

const BlogLayout = () => {
  return (
    <>
      <Navbar />
      <BlogGallery />
      <Footer />
    </>
  );
}

export default BlogLayout;