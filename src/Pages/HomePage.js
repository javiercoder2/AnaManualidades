import React from'react';
import '../App.css';
import Navbar from '../components/Navbar/Navbar.jsx';
import { AboutUs, Creator, FindUs, Footer, Gallery, Header, Intro, SpecialCreations, Manualidades  } from '../containers';



function HomePage() {
  return (
    <div>
    <Navbar />
    <Header />
    <AboutUs />
    <Creator />
    <Intro />
    <Manualidades />
    <SpecialCreations />
    <Gallery />
    <FindUs />
    <Footer />
  </div>
  )
}

export default HomePage;