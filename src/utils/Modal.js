import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

export default function ModalDeleteMessage({ open, closeDelete, user, confirmDelete , message}) {
  return (
    <Modal.Dialog className="modal-sm">
    <Modal show={open} onHide={closeDelete} centered>
      <Modal.Body className="text-center">
      <p>{message}</p>
      </Modal.Body>
      <Modal.Footer className="mx-auto">
        <Button variant="danger" onClick={confirmDelete}>
          Sim
        </Button>
        <Button variant="secondary" onClick={closeDelete}>
          Não
        </Button>
      </Modal.Footer>
    </Modal>
    </Modal.Dialog>
  );
}