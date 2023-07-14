import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Creator.css';

const Creator = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.anita3} alt="chef_image" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Palabra de Anita" />
      <h1 className="headtext__cormorant">Mis Creencias</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote_image" />
          <p className="p__opensans">Lo necesario es sentirte comodo y Feliz con los articulos</p>
        </div>
        <p className="p__opensans"> Obtendras un articulo de calidad y hecho de la mejor manera posible. En cada tejido dare lo mejor de mi para que puedas recibir algo que te guste y puedas estar en total confianza </p>
      </div>

      <div className="app__chef-sign">
        <p>Ana Roman</p>
        <p className="p__opensans">Fundadora y Creadora</p>
        <img id="sign" src={images.signAna} alt="sign_image" />
      </div>
    </div>
  </div>
);

export default Creator;