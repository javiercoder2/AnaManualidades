import React from 'react';
import {BrowserRouter, Routes,Route} from 'react-router-dom';
import { AboutUs, Creator, FindUs, Footer, Gallery, Header, Intro, SpecialCreations, Manualidades  } from './containers';
import { Navbar } from './components';
import './App.css';
import HomePage from './Pages/HomePage';
import ProductsPage from './Pages/Products';

const App = ()=> {
  return(
  <BrowserRouter>
          <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/Articulos" element={<ProductsPage/>}/>

          </Routes>
      </BrowserRouter>
  )
}
export default App;