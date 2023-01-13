import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="G_overlay" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">Sobre Anita</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">Me encantan los niños, compartir, reir y disfrutar con mi familia. Adoro crear cosas que mis seres queridos puedan usar, vestir y necesitar. Todo objeto creado por mi, se va con una parte mia.</p>
        <button type="button" className="custom__button">Conoce mas</button>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.Lana} alt="about_knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Mi historia</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">Nacida y criada en San Vicente, Chile en un hogar del campo donde todos se conocian, cada persona ayudaba a otra y encontraba lugar donde sentirse acompañada y apoyada. Actualmente, con residencia en Santiago con familia y un nuero hermoso precioso llamado Javier.</p>
        <button type="button" className="custom__button">Conoce mas</button>
      </div>
    </div>
  </div>
);

export default AboutUs;