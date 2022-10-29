import React from 'react'
import InlineDateTimePickerDemo from '../calendar/Calendar';
import './modal.css';
import Hours from '../hours/Hours';

const Modal = props => {

  if (!props.show) {
    return null;
  }

  return (
    <div className='container' onClick={props.onClose}>

      <div className='modal-content' onClick={e => e.stopPropagation()}>



        <InlineDateTimePickerDemo />
        <Hours />

        <div className="modal-footer">
          <a className='buttonClose' onClick={props.onClose}>X</a>
        </div>




      </div>




    </div>
  )
}

export default Modal;