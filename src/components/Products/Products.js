import React, { useEffect, useState, useRef} from "react";
import emailjs from '@emailjs/browser';
import CardItem from './CardItem';
import './Products.css';

function Products() {
  //Creamos el actuar de los click
  const [click, setClick] = useState(false);

  const form = useRef()


  const sendEmail = (e) => {
    e.preventDefault();
    
    emailjs.sendForm('service_mkmj6di', 'template_edm4gbt', form.current, 'LzoEHYhd8fMUGQE2D')
      .then((result) => {
          console.log(result.text);
          console.log("Mensaje enviado existosamente");
        alert("Gracias, te respondere en breve");

      }, (error) => {
          console.log(error.text);
      });
      }


  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  //Creamos const para cerrar el sign
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  },[]);


  window.addEventListener("resize", showButton);


  return (
    <><><>
      </><div className='cards'>
              <h1 className="fst-italic">Productos a la Venta</h1>
              <div className='cards__container'>
                  <div className='cards__wrapper'>
                      <ul className='cards__items'>
                          <CardItem
                              src='images/producto.jpg'
                              text='Gorro de Lana Azul, estilo clasico'
                              label='$3000'
                              path='/Polyglot' />
                          <CardItem
                              src='images/productoportada.jpg'
                              text='                   Consigue los tuyos!'
                              label='$3000'
                              path='/Learning' />
                      </ul>
                      <ul className='cards__items'>
                          <CardItem
                              src='images/Cuello_001.jpg'
                              text='Cuello color negro, estilo clasico'
                              label='$3000 '
                              path='/Personal' />
                          <CardItem
                              src='images/Cuello_002.jpg'
                              text='Cuello color cafe claro, estilo clasico'
                              label='$3000'
                              path='/Personal' />
                          <CardItem
                              src='images/Cuello_003.jpg'
                              text='Cuello color azul muzgo, estilo clasico'
                              label='$3000'
                              path='/Me'/>
                              
                      </ul>

                      <ul className='cards__items'>
                          <CardItem
                              src='images/Cuello_004.jpg'
                              text='Cuello color azul, estilo clasico'
                              label='$3000 '
                              path='/Personal' />
                          <CardItem
                              src='images/Cuello_005..jpg'
                              text='Cuello color cafe oscuro, estilo clasico'
                              label='$3000'
                              path='/Personal' />
                          <CardItem
                              src='images/Cuello_006.jpg'
                              text='Cuello color cafe arena, estilo clasico'
                              label='$3000'
                              path='/Me'/>
                              
                      </ul>

                      <ul className='cards__items'>
                          <CardItem
                              src='images/Cuello_007.jpg'
                              text='Cuello color mostaza, estilo clasico'
                              label='$3000 '
                              path='/Personal' />
                          <CardItem
                              src='images/Cuello_008.jpg'
                              text='Cuello color naranjo, estilo clasico'
                              label='$3000'
                              path='/Personal' />
                          <CardItem
                              src='images/Cuello_009.jpg'
                              text='Cuello color rojo, estilo corto'
                              label='$3000'
                              path='/Me'/>
                              
                      </ul>

                      <ul className='cards__items'>
                          <CardItem
                              src='images/Cuello_010.jpg'
                              text='Cuello color morado, estilo clasico'
                              label='$3000 '
                              path='/Personal' />
                          <CardItem
                              src='images/Cuello_011.jpg'
                              text='Cuello color fucsia, estilo clasico'
                              label='$3000'
                              path='/Personal' />
                          <CardItem
                              src='images/Cuello_012.jpg'
                              text='Cuello color negro claro, estilo clasico'
                              label='$3000'
                              path='/Me'/>
                              
                      </ul>

                      <ul className='cards__items'>
                          <CardItem
                              src='images/Cuello_013.jpg'
                              text='Cuello color cafe claro, estilo bordado'
                              label='$3000 '
                              path='/Personal' />
                          <CardItem
                              src='images/Cuello_014.jpg'
                              text='Cuello color verde musgo, estilo clasico'
                              label='$3000'
                              path='/Personal' />
                          <CardItem
                              src='images/Cuello_015.jpg'
                              text='Cuello color cafe, estilo clasico enlazado'
                              label='$3000'
                              path='/Me'/>
                              
                      </ul>

                      <ul className='cards__items'>
                          <CardItem
                              src='images/Cuello_016.jpg'
                              text='Cuello color verde oscuro, estilo clasico'
                              label='$3000 '
                              path='/Personal' />
                          <CardItem
                              src='images/Gorro_001.jpg'
                              text='Gorro de Lana cafe oscuro, estilo clasico'
                              label='$3000'
                              path='/Personal' />
                          <CardItem
                              src='images/Gorro_002.jpg'
                              text='Gorro de Lana verde con celeste, estilo clasico'
                              label='$3000'
                              path='/Me'/>
                              
                      </ul>

                      <ul className='cards__items'>
                          <CardItem
                              src='images/Gorro_003.jpg'
                              text='Gorro de Lana Azul, estilo clasico'
                              label='$3000 '
                              path='/Personal' />
                          <CardItem
                              src='images/Gorro_004.jpg'
                              text='Gorro de Lana cafe con rojo, estilo clasico'
                              label='$3000'
                              path='/Personal' />
                          <CardItem
                              src='images/Gorro_005.jpg'
                              text='Gorro de Lana cafe oscuro , estilo clasico'
                              label='$3000'
                              path='/Me'/>
                              
                      </ul>

                      <ul className='cards__items'>
                          <CardItem
                              src='images/Gorro_006.jpg'
                              text='Gorro de Lana rojo, estilo sombrero'
                              label='$3000 '
                              path='/Personal' />
                          <CardItem
                              src='images/Gorro_007.jpg'
                              text='Gorro de Lana Amarillo, estilo clasico'
                              label='$3000'
                              path='/Personal' />
                          <CardItem
                              src='images/Gorro_008.jpg'
                              text='Gorro de Lana Azul, estilo clasico'
                              label='$3000'
                              path='/Me'/>
                              
                      </ul>

                      <ul className='cards__items'>
                          <CardItem
                              src='images/Gorro_009.jpg'
                              text='Gorro de Lana Naranjo, estilo sombrero'
                              label='$3000 '
                              path='/Personal' />
                          <CardItem
                              src='images/Gorro_010.jpg'
                              text='Gorro de Lana cafe, estilo clasico'
                              label='$3000'
                              path='/Personal' />
                          <CardItem
                              src='images/Gorro_011.jpg'
                              text='Gorro de Lana gris, estilo sombrero'
                              label='$3000'
                              path='/Me'/>
                              
                      </ul>

                      <ul className='cards__items'>
                          <CardItem
                              src='images/Gorro_012.jpg'
                              text='Gorro de Lana amarillo, estilo clasico'
                              label='$3000 '
                              path='/Personal' />
                          <CardItem
                              src='images/Gorro_013.jpg'
                              text='Gorro de Lana verde y naranjo, estilo chabito'
                              label='$3000'
                              path='/Personal' />
                          <CardItem
                              src='images/Gorro_014.jpg'
                              text='Gorro de Lana Azul, estilo clasico'
                              label='$3000'
                              path='/Me'/>
                              
                      </ul>

                      <ul className='cards__items'>
                          <CardItem
                              src='images/Gorro_015.jpg'
                              text='Gorro de Lana musgo, estilo clasico'
                              label='$3000 '
                              path='/Personal' />
                          <CardItem
                              src='images/Gorro_016.jpg'
                              text='Gorro de Lana gris, estilo clasico'
                              label='$3000'
                              path='/Personal' />
                          <CardItem
                              src='images/Gorro_017.jpg'
                              text='Gorro de Lana naranjo, estilo clasico'
                              label='$3000'
                              path='/Me'/>
                              
                      </ul>

                      <ul className='cards__items'>
                          <CardItem
                              src='images/Gorro_025.jpg'
                              text='Gorro de Lana naranjo y verde, estilo clasico'
                              label='$3000 '
                              path='/Personal' />
                          <CardItem
                              src='images/Gorro_019.jpg'
                              text='Gorro de Lana Azul, estilo clasico'
                              label='$3000'
                              path='/Personal' />
                          <CardItem
                              src='images/Gorro_020.jpg'
                              text='Gorro de Lana cafe, estilo clasico'
                              label='$3000'
                              path='/Personal'/>
                              
                      </ul>

                      <ul className='cards__items'>
                          <CardItem
                              src='images/Gorro_021.jpg'
                              text='Gorro de Lana naranjo y verde, estilo clasico'
                              label='$3000 '
                              path='/Personal' />
                          <CardItem
                              src='images/Gorro_022.jpg'
                              text='Gorro de Lana cafe, verde y rojo, estilo clasico'
                              label='$3000'
                              path='/Personal' />
                          <CardItem
                              src='images/Gorro_023.jpg'
                              text='Gorro de Lana morado y piel, estilo clasico'
                              label='$3000'
                              path='/Personal'/>
                              
                      </ul>

                      <ul className='cards__items'>
                          <CardItem
                              src='images/Gorro_024.jpg'
                              text='Gorro de Lana cafe oscuro, estilo clasico'
                              label='$3000 '
                              path='/Personal' />
                          <CardItem
                              src='images/Gorro_025.jpg'
                              text='Gorro de Lana naranjo y verde, estilo clasico'
                              label='$3000'
                              path='/Personal' />
                          <CardItem
                              src='images/Gorro_008.jpg'
                              text='Gorro de Lana Azul, estilo clasico'
                              label='$3000'
                              path='/Personal'/>
                              
                      </ul>

                  </div>
              </div>
          </div></><div className='footer-container'>
              <section className='footer-subscription'>
                  <p className='MailInfo'>
                      Favor, escribeme un correo si deseas algo mas personalizado
                  </p>
                  <p className='MailInfo'>
                      Espero saber de ti!
                  </p>
                  <div className='input-areas'>

                  <form ref={form} onSubmit={sendEmail}>
      <label className='MailInfo' id="correo">Ingrese su nombre</label>
      <input className='reference'  type="text" name="user_name" />
      <label className='MailInfo'>Ingrese su correo electronico</label>
      <input className='reference' type="email" name="user_email" />
      <label className='MailInfo'>Ingrese su mensaje y te contactaremos a la brevedad</label>
      <textarea id='textarea' name="message" />
      <input type="submit" value="Send" />

                    </form>

                  </div>
              </section>


          </div></>
);
}


export default Products;



