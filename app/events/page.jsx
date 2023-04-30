import React from 'react'
import Navbar from '../shared/navbar/page'
import EventHeader from './eventsHeader'
import EventsGallery from './eventsGallery'
import Footer from '../shared/footer'

const EventLayout = () => {
  return (
    <>
      <Navbar />
      <EventHeader />
      <EventsGallery />
      <Footer />
    </>
  );
}

export default EventLayout
