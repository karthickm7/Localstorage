import React, { useState } from "react";
import { Row, Col, Container, Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

import "./login.css";

function Login() {

  let navigate = useNavigate();
  
  const [data, setData] = useState({ email: "", pasword: "" });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    
/*Get data from local*/
    let regform = localStorage.getItem("Detail");
    let newreg = JSON.parse(regform);
    
    
    console.log([data.email,data.pasword])
    let datas=newreg.find((item)=>item.email===data.email && item.pasword===data.pasword)
    console.log(datas)
    if(datas){
      console.log("success")
      localStorage.setItem("Currentdata",JSON.stringify(datas))
      navigate("/Home");
    }
    else{
      alert('invalid Data')
      
    }

  };

  

  return (
    <Container className="bg-light ">
      <Row className="mt-5">
        <Col lg={5} md={6} sm={12} className="m-auto p-5 shadow-sm rounded-lg">

          <h1 className="shadow-sm text-dark mt-5 p-3 text-center rounded">
            User Login
          </h1>

          <Form onSubmit={handleFormSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                onChange={handleChange}
                value={data.email}
                name="email"
              ></Form.Control>
              {/* {emailError && <div className="error-msg">{emailError}</div>} */}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
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
