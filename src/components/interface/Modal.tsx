import React from 'react'
import { ModalInt } from '../../types/form'
import Form from './Form'
const Modal = (signIn:ModalInt) => {
  return (
    <div className='overlay'>
    <div className="modal">
    <div className="modal-close">
   &#x2613;
   </div> 
    <div className="modal-title">
      Sign in
   </div>

   <div className="modal-form">
    <Form signForm={signIn}/>
   </div>
    </div>

    </div>
  )
}

export default Modal