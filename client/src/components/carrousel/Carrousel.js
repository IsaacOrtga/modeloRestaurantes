import Carousel from 'react-bootstrap/Carousel';

function DarkVariantExample() {
  return (
    <Carousel variant="dark" mx-auto>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.google.com/url?sa=i&url=https%3A%2F%2Frestauracionnews.com%2F2022%2F04%2Fgrupo-isabellas-restaurante-carmina-barcelona%2F&psig=AOvVaw3dGMFBZ-ZdUZ5ybcBjRV5B&ust=1665938821858000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCNi9zO_X4voCFQAAAAAdAAAAABAO"
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Second slide&bg=eee "
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Third slide&bg=e5e5e5"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default DarkVariantExample;