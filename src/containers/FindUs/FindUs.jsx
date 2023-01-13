import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';

const FindUs = () => (
  <div className="app__bg app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
      <SubHeading title="Contacto" />
      <h1 className="headtext__cormorant" style={{ marginBottom: '3rem' }}>Encuentranos</h1>
      <div className="app__wrapper-content">
        <p className="p__opensans">Cerrillos, Santiago, Chile</p>
        <p className="p__cormorant" style={{ color: '#DCCA87', margin: '2rem 0' }}>Envios a Todo Chile</p>
        <p className="p__opensans">Lunes a Viernes : 09:00 - 17:00</p>
        <p className="p__opensans">Sabado: 09:00 - 14:00 </p>
      </div>
      <button type="button" className="custom__button" style={{ marginTop: '2rem' }}>Visit Us</button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.envios} alt="finus_img" />
    </div>
  </div>
);

export default FindUs;