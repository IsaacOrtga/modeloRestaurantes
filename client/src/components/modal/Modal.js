import React from 'react'
import InlineDateTimePickerDemo from '../calendar/Calendar';
import './modal.css';

const Modal = props => {

if(!props.show){
 return null;
}

  return (
    <div className='container' onClick={ props.onClose }>

        <div className='modal-content' onClick={e => e.stopPropagation()}>
               
               
               
        <InlineDateTimePickerDemo />    
               
               
               
               
    
                <div className="modal-footer">
                    <button className='buttonClose' onClick={props.onClose}>Cerrar</button>
                </div>
            </div>



        
    </div>
  )
}

export default Modal;