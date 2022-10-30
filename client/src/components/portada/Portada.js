import React from 'react'
import { useEffect } from 'react';
import Imagen1 from '../../assets/images/carrusel1.jpg';
import './portada.css';

import AOS from "aos";
import "aos/dist/aos.css";




function Portada() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);






  return (
    <div>
      <div className='imagenPortada'>

      </div>
      <div className='welcomeContainer' >
        <div className='welcomeText' data-aos="fade-up">
          <h2>Experimentando sabores</h2>
          <p>Basamos nuestra cocina en lo tradicional, combinando los sabores de toda la vida con creatividad. <br></br>
            Ven a degustar nuestras tapas, así como nuestras especialidades en cocina española</p>
        </div>
      </div>
    </div>
  )
}

export default Portada;
