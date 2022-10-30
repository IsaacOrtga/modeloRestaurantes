import React from 'react'
import './footer.css';
import { FaInstagram, FaFacebookSquare, FaTwitterSquare } from 'react-icons/fa';



const Footer = () => {
  return (
    <div>
        <div className='footer'>
          <div className='icons' data-aos="fade-right">
              <FaInstagram />
              <FaFacebookSquare />
              <FaTwitterSquare />
        </div>
   
        </div>
    </div>
  )
}

export default Footer;