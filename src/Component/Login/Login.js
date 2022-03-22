import React, { useState } from "react";
import { Row, Col, Container, Form, Button ,Modal} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import dynamic from './login.module.css';



function Login() {

  let navigate = useNavigate();

  const [show, setShow] = useState(false);

  const PopupClose = () =>{  setShow(false)};
  const PopupShow = () => { setShow(true)};
  
  const [data, setData] = useState({ email: "", pasword: "" });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    
/*Get data from local*/
    let regform = localStorage.getItem("Detail");
    let newreg = JSON.parse(regform);
    console.log(newreg)
    
    
    console.log([data.email,data.pasword])
    let datas=newreg.find((item)=>item.email===data.email && item.pasword===data.pasword)
    console.log(datas)
    
    if(datas){
      console.log(datas)
      // localStorage.setItem("Currentdata",JSON.stringify(datas))
      navigate("/Home");
    }
   
    else {
      PopupShow()
    }

  };

  

  return (
    <Container className="bg-light ">
      <Row className="mt-5">
        <Col lg={5} md={6} sm={12} className="m-auto p-5 shadow-sm rounded-lg">

          <h1 className="shadow-sm text-dark mt-5 p-3 text-center rounded">
            User Login
          </h1>

          {/* modal popup */}
      <Modal show={show} onHide={PopupClose}>
        <Modal.Header closeButton>
          <Modal.Title>Invalid User Data</Modal.Title>
        </Modal.Header>
        <Modal.Body>Enter Valid Data</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={PopupClose}>
            Close
          </Button>
         </Modal.Footer>
      </Modal>

          <Form onSubmit={handleFormSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label  className={dynamic.invalid}>Email address</Form.Label>
              <Form.Control
                className={`${dynamic.formcontrol} ${!data.email && dynamic.inavlid}`} 
                type="email"
                placeholder="Enter email"
                onChange={handleChange}
                value={data.email}
                name="email"
              ></Form.Control>
             
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label className={dynamic.invalid}>Password</Form.Label>
              <Form.Control
                className={`${dynamic.formcontrol} ${!data.datas && dynamic.invalid}`}
                type="password"
                placeholder="Password"
                onChange={handleChange}
                value={data.pasword}
                name="pasword"
              />
              
            </Form.Group> 

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>

            <Button variant="primary btn-block" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
export default Login;
