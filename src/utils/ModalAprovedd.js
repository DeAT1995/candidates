import React from 'react';
import { Button, Modal } from 'react-bootstrap';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  backgroundColor: 'white',
  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
  padding: '16px',
  borderRadius: '8px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
};

export default function ModalSucessMessage({ open, handleClose }) {
  return (
    <div>
     
      <Modal show={open} onHide={handleClose}>
        <Modal.Body style={style}>
          <p style={{ fontSize: '1.1rem' }}>
           Parabéns, candidato aprovado!
          </p>
        </Modal.Body>
      </Modal>
    </div>
  );
}