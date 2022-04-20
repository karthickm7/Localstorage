import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";

const Putpop = (props) => {
  const [update, setUpdate] = useState({ Name: "", username: "", email: "" });
  const handleChange = (e) => {
    setUpdate({ ...update, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (props.puser) {
      setUpdate(props.puser);
    }
  }, [props.puser]);

  const handleput = () => {
    console.log(update, "save changes");
    props.binding(update);
  };

  return (
    <>
      <div>
        <Modal show={props.show} onHide={props.handleClose}>
          <Modal.Header>
            <Modal.Title>PUT METHOD</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
              <input
                onChange={handleChange}
                value={update.Name}
                name="Name"
                type="text"
                placeholder="FirstName"
              ></input>
            </div>
            <div>
              <input
                onChange={handleChange}
                value={update.username}
                name="username"
                type="text"
                placeholder="Lastname"
              ></input>
            </div>
            <div>
              <input
                onChange={handleChange}
                value={update.email}
                name="email"
                type="text"
                placeholder="Email"
              ></input>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={props.onHide}>
              Close
            </Button>
            <Button onClick={handleput} variant="secondary">
              PUT YOUR DATA
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
};

export default Putpop;
