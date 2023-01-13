import React from 'react';

import { AboutUs, Creator, FindUs, Footer, Gallery, Header, Intro, SpecialCreations, Manualidades  } from './containers';
import { Navbar } from './components';
import './App.css';

const App = () => (
  <div>
    <Navbar />
    <Header />
    <AboutUs />
    <SpecialCreations/>
    <Creator />
    <Intro />
    <Manualidades /> 
    <Gallery />
    <FindUs />
    <Footer />
  </div>
);

export default App;