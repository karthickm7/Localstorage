/* eslint-disable react/prop-types */
import React, { useState, useEffect, useContext } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { rowcontext } from './Home';

function Popup(props) {
  const currentrows = useContext(rowcontext);

  console.log(currentrows?.edit?.Id, 'currentrows');

  const [dat, setDat] = useState({
    firstname: '',
    lastname: '',
    email: ''
  });

  useEffect(() => {
    if (currentrows.edit) {
      setDat(currentrows.edit);
    }
  }, [currentrows.edit]);

  const handleChange = (e) => {
    setDat({ ...dat, [e.target.name]: e.target.value });
  };

  const handleUpdate = () => {
    console.log(dat, 'schange');
    props.pass(dat);
  };

  return (
    <>
      <div>
        <Modal show={props.show} onHide={props.handleClose}>
          <Modal.Header>
            <Modal.Title>Invalid User Data</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
              <input
                onChange={handleChange}
                value={dat.firstname}
                name="firstname"
                type="text"
                placeholder="FirstName"></input>
            </div>
            <div>
              <input
                onChange={handleChange}
                value={dat.lastname}
                name="lastname"
                type="text"
                placeholder="Lastname"></input>
            </div>
            <div>
              <input
                onChange={handleChange}
                value={dat.email}
                name="email"
                type="text"
                placeholder="Email"></input>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={props.onHide}>
              Close
            </Button>
            <Button variant="secondary" onClick={handleUpdate}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
}

export default Popup;
