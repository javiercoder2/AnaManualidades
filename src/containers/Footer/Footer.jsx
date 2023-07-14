import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram} from 'react-icons/fi';
import { FaBeer, FaWhatsapp } from "react-icons/fa";

import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className="app__footer section__padding" id="login">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contactame</h1>
        <p className="p__opensans">Santiago, Chile</p>
        <p className="p__opensans">+5695694542</p>
        <p className="p__opensans">+5695454255</p>
      </div>

      <div className="app__footer-links_logo">
        <img src={images.Anita} alt="footer_logo" />
        <p className="p__opensans">&quot;Nuestra recompensa se encuentra en el esfuerzo y no en el resultado. Un esfuerzo total es una victoria completa.&quot;</p>
        <img src={images.spoon} className="spoon__img" style={{ marginTop: 15 }} />
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />

          <a href="https://api.whatsapp.com/send?phone=56961335753&text=Hola%2C%20soy%20Anita%20Manualidades%2C%20gracias%20por%20contactarte%20conmigo%20%20%20.%20%20Como%20puedo%20ayudarte?%20%20%20%3A%20" target="_bKJk" rel="noreferrer"
                            class='social-icon-link youtube'
                              aria-label='Twitter'
                              >
                              <i class='fab fa-whatsapp' />
                              {}
       <FaWhatsapp />{}
                            </a>


        </div>
      </div>
      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Horario de Trabajo y Envios</h1>
        <p className="p__opensans">Lunes a Viernes:</p>
        <p className="p__opensans">09:00 a 17:00</p>
        <p className="p__opensans">Sabado</p>
        <p className="p__opensans">07:00 am - 11:00 pm</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">2023 Anita Manualidades. Todos los Derechos Reservados.</p>
    </div>

  </div>
);

export default Footer;