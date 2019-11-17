
import React, { useState } from 'react';
import { Modal, ModalHeader } from 'reactstrap';

const ModalComponent = (props) => {
  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <strong>
      <a href="#top" className="nav-link active" onClick={toggle}>{buttonLabel}</a>
      </strong>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>{props.title}</ModalHeader>
        {props.children}
      </Modal>
    </div>
  );
}

export default ModalComponent;