/* eslint-disable no-unused-vars */
import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer';
import CarouselFade from './components/CarousalFade';
import CardContainer from './components/CardContainer';
import './index.css';


const App = () => {
  return (
    <>
      <Navbar />
      <CarouselFade />
      <CardContainer/>
      <Footer />
    </>
  )
}

export default App