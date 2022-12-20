import React from 'react';
import { useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.scss'

const Modal = ({  children, onClose }) => {

  useEffect(() => {
    document.body.classList.add('overflow-hidden');

    return () => {
      document.body.classList.remove('overflow-hidden')
    }
  }, [])

  return ReactDOM.createPortal(
    <div>
      <div onClick={onClose} className='modal'> </div>
      <div className='modal-body'>
        <div className='modal-body_'>
          {children}
          {/* <div className='modal-close'>
            {actionBar}
          </div> */}
        </div>
      </div>
    </div>
    ,
    document.querySelector('.modal-container')
  );
}

export default Modal;