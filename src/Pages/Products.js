import React from'react';
import '../App.css';
import Navbar from '../components/Navbar/Navbar.jsx';
import { Footer} from '../containers';
import Products from '../components/Products/Products';
/* import Mail from '../components/Mail/Mail'; */


function ProductsPage() {
  return (
    <div>
    <Navbar />
    <Products/>
    <Footer />
  </div>
  )
}

export default ProductsPage;