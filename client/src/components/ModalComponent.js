
import React, { useState } from 'react';
import { Button, Modal, ModalHeader } from 'reactstrap';

const ModalComponent = (props) => {
  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="danger" onClick={toggle}>{buttonLabel}</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>{props.title}</ModalHeader>
        {props.children}
      </Modal>
    </div>
  );
}

export default ModalComponent;