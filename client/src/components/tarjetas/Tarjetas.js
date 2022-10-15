import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./tarjetas.css"


function WithHeaderExample() {
  return (
    <div className='contenedorTarjetas'>
    <Card>
      <Card.Header>Featured</Card.Header>
      <Card.Body>
        <Card.Title>Special title treatment</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>

<Card>
<Card.Header>Featured</Card.Header>
<Card.Body>
  <Card.Title>Special title treatment</Card.Title>
  <Card.Text>
    With supporting text below as a natural lead-in to additional content.
  </Card.Text>
  <Button variant="primary">Go somewhere</Button>
</Card.Body>
</Card>

<Card>
      <Card.Header>CONTACTO</Card.Header>
      <Card.Body>
        <Card.Title>Special title treatment</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
    
  );
}

export default WithHeaderExample;