import Carousel from 'react-bootstrap/Carousel';
import Car1 from '../../assets/images/car1.jpg';
import Car2 from '../../assets/images/car2.jpg';
import Car3 from '../../assets/images/car3.jpg';
import './carrusel.css';

function DarkVariantExample() {
  return (
    <div className="contenedorCaru">
    <Carousel className='carrusel' variant="dark" mx-auto>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Car1}
          alt="First slide"
        />
        <Carousel.Caption>

        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Car2}
          alt="Second slide"
        />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Car3}
          alt="Third slide"
        />
        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default DarkVariantExample;