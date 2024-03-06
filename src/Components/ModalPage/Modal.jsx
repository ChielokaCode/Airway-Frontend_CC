import React, { useState } from 'react';
import ModalPage from './ModalPage';

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button onClick={openModal}>Open Modal</button>
      {isOpen && <ModalPage onClose={closeModal} />}
    </>
  );
};

export default Modal;
