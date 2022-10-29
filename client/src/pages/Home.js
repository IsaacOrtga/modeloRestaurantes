import React from 'react'
import Carrousel from '../components/carrousel/Carrousel';
import Toggle from '../components/toggle/Toggle';
import Portada from '../components/portada/Portada';
import Tarjetas from '../components/tarjetas/Tarjetas';
import Footer from '../components/footer/Footer';




const Home = () => {
  return (
    <div>
      
      <Toggle />
      <Portada />
     <Carrousel /> 
     <Tarjetas />
    <Footer />
    </div>
  )
}

export default Home;