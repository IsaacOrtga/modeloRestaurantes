import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from '../modal/Modal';
import "./tarjetas.css"


function WithHeaderExample() {

  const [ show, setShow ] = useState( false )

  return (
    <div className='contenedorTarjetas'>
    <Card className='card'>
      <Card.Header>Consultar carta</Card.Header>
      <Card.Body>
    
        <Card.Text className='mt-5'>
          Consulta nuestras diferentes opciones
        </Card.Text>
        <Button className='mt-5' variant="dark">Consultar</Button>
      </Card.Body>
    </Card>

<Card className='card'>
<Card.Header>Horario</Card.Header>
<Card.Body>
  <Card.Text>
  Abierto todos los días<br />
Comida - 13:30 / 17:00<br />
Cena - 20:30 / 24:00<br />
Menú del día:
Lunes a viernes de 13:30 a 17:00  <br />

Calle Encomienda, 19 28012 Madrid
Teléfono: 910 291 300</Card.Text>
  <Button  variant="dark" target='_blank' href='https://goo.gl/maps/ovB5CeQ68VtGV9HUA' >Localización</Button>
</Card.Body>
</Card>

<Card className='card'>
      <Card.Header>RESERVAR</Card.Header>
      <Card.Body>
        <Card.Text className='mt-5'>
          Si no quieres esperar cola, reserva ya.

        </Card.Text>
        <Button className='mt-5' variant="dark" onClick={ () => setShow( true )}>Reservar</Button>
      </Card.Body>
    </Card>

    <Modal onClose={() => setShow( false )} show = { show }/>

    </div>
    
  );
}

export default WithHeaderExample;