
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
      <a className="nav-link active" onClick={toggle}>{buttonLabel}</a>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>{props.title}</ModalHeader>
        {props.children}
      </Modal>
    </div>
  );
}

export default ModalComponent;

