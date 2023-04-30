import React from 'react'
import Navbar from "../../shared/navbar/page";
import EventContent from './eventContent';
import Footer from "../../shared/footer";

const EventDetailsLayout = () => {
  return (
    <>
      <Navbar />
      <EventContent />
      <Footer />
    </>
  );
}

export default EventDetailsLayout;