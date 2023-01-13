import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Obtiene algo hecho con amor" />
      <h1 className="app__header-h1">La Clave esta en colocar tu corazon en el producto</h1>
      <p className="p__opensans" style={{ margin: '2rem 0' }}>Todo producto es hecho a mano y a pedido donde cada trabajo sera realizado con la mayor paciencia, cariño y orgullo.</p>
      <button type="button" className="custom__button">Explorar Manualidades</button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header_img" />
    </div>
  </div>
);

export default Header;