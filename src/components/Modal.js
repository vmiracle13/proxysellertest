import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

const ESCAPE_KEY = 27;

const modalRoot = document.getElementById("modal");
const el = document.createElement('div');
const root = document.getElementById('root');

const Modal = ({ children, closeModal }) => {
  const [modalElement, setModalEl] = useState();

  const handleClickOutside = ({ target }) => {
    if (modalElement === target) {
      closeModal();
    }
  };

  const handleKeyDown = ({ keyCode }) => {
    if (keyCode === ESCAPE_KEY && closeModal) {
      closeModal();
    }
  };

  useEffect(() => {
    modalRoot.appendChild(el);
    if (closeModal) {
      root?.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      modalRoot.removeChild(el);
      if (closeModal) {
        root?.removeEventListener('keydown', handleKeyDown);
      }
    }
  }, []);

  return ReactDOM.createPortal(
    <div className="modal-box" onClick={handleClickOutside} ref={(el) => setModalEl(el)}>
      <div className='modal-content'>
        <button type="button" className="close" aria-label="Close" onClick={closeModal}>&times;</button>

        {children}
      </div>
    </div>
    , modalRoot);
}

Modal.propTypes = {
  children: PropTypes.any,
  closeModal: PropTypes.func,
};

export default Modal;
