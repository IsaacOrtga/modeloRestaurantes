import React from 'react';
import './carta.css';

export const Carta = () => {


  return (
    <div className='menuContainer'>
        <div className='menu-content'>
          <div className='starters-content'>
            <dl>
                <dt>Entrantes</dt>
                <dd>Boniato al horno especiado, 6,00€</dd>
                <dd>Pimientos rellenos, 5,00€</dd>
                <dd>Asado de verduras con tahini, 6,00€</dd>
                <dd>Croquetas de boletus, 1,00€/ud</dd>
                <dd>Tostas de guacamole con pimiento asado, 5,00€</dd>
                <dd>Crema de calabaza y picatostes, 7,50€</dd>
                <dd>Sticks de verduras con guacamole, 5,00€</dd>
                <dd>Entrante especial del día, 6,00€</dd>
            </dl>
          </div>

          <div className='maindishes-content'>
          <dl>
                <dt>Principales</dt>
                <dd><strong>Pad Thai:</strong> tallarines, verduras con gambas salteadas con salsa thai, 13,00€</dd>
                <dd><strong>Lasagna:</strong> rellena de carne bolognesa y verduras, cocinado en salsa passata con bechamel ahumada, 13€</dd>
                <dd><strong>Pad Thai:</strong></dd>
                <dd><strong>Pad Thai:</strong></dd>
                <dd><strong>Pad Thai:</strong></dd>
                <dd><strong>Pad Thai:</strong></dd>
                <dd><strong>Pad Thai:</strong></dd>
                <dd><strong>Pad Thai:</strong></dd>
                <dd><strong>Pad Thai:</strong></dd>
                <dd><strong>Pad Thai:</strong></dd>
                <dd><strong>Pad Thai:</strong></dd>
                <dd><strong>Pad Thai:</strong></dd>
            </dl>
          </div>
          <div className='drinks-content'>
          <dl>
                <dt>Bebidas sin alcohol</dt>
                <dd>Refrescos, 1,50€</dd>
                <dd>Zumos naturales (elige dos frutas), 3,50

                  <dl>
                    <dd>Plátano</dd>
                    <dd>Melón</dd>
                    <dd>Mango</dd>
                    <dd>Papaya</dd>
                    <dd>Naranja</dd>
                    <dd>Fresa</dd>
                  </dl>
                </dd>

                <dd>Agua, 1,50€</dd>
                <dd>Agua con gas, 1,80€</dd>
                <dd>Zumo de bote, 2,00€</dd>
            </dl>

            <dl>
                <dt>Cervezas</dt>
                <dd>Tercio de Mahou, 2,00€</dd>
                <dd>Tercio de Estrella Galicia, 2,00€</dd>
                <dd>Tercio de Cibeles, 2,50€</dd>
                <dd>Tercio de La Virgen, 3,00€</dd>
                <dd>Caña, 1,50€</dd>
                <dd>Doble, 2,20€</dd>
            </dl>

            <dl>
                <dt>Vinos</dt>
                <dd>Cerveza Mahou, 2,00€</dd>
                <dd>Cerveza Estrella Galicia, 2,00€</dd>
                <dd>Cerveza Cibeles, 2,50€</dd>
                <dd>Cerveza La Virgen, 3,00€</dd>
                <dd>Caña, 1,50€</dd>
                <dd>Doble, 2,20€</dd>
            </dl>
          </div>
            
        <div className="modal-footer">
          <a className='buttonClose'>X</a>
        </div>
        </div>

        
    </div>
  )
}
