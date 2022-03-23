import React from "react";
// import { Button } from "bootstrap";
import ReactDOM from "react-dom";
import {Button} from "react-bootstrap";
import {Modal} from 'react-bootstrap'

function Modals(props) {
  return ReactDOM.createPortal(
    <>
      <div>
      <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header>
          <Modal.Title>Invalid User Data</Modal.Title>
        </Modal.Header>
        <Modal.Body>Enter Valid Data</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.onHide}>
            Close
          </Button>
        </Modal.Footer>
        </Modal>
      </div>
    </>,
    document.getElementById('portal')
  );
}
export default Modals;