import React, { useState } from "react";
import { Row, Col, Container, Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import "./login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [pasword, setPasword] = useState("");
  const [paswordError, setPaswordError] = useState("");

  const [successMsg, setSuccessMsg] = useState("");

  const handleEmailChange = (e) => {
    setSuccessMsg("");
    setEmailError("");
    setEmail(e.target.value);

    console.log(e.target.value, "mail");
  };

  const handlePasswordChange = (e) => {
    setSuccessMsg("");
    setPaswordError("");
    setPasword(e.target.value);
    console.log(pasword);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (email !== "") {
      const emailregex =
        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
      if (emailregex.test(email)) {
        setEmailError("");
        if (email === "admin@demo.com") {
          setEmailError("");
          if (pasword === "demo") {
            setSuccessMsg("you are Successfully Logged In");
          } else {
            setPaswordError("Password doesnt match with Email");
          }
        } else {
          setEmailError("Email does not match with dataBase");
        }
      } else {
        setEmailError("Invalid Email");
      }
    } else {
      setEmailError("Emal Required");
    }

    if (pasword !== "") {
    } else {
      setPaswordError("Enter Password");
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
            {successMsg && (
              <>
                <div className="success-msg">{successMsg}</div>
                <br></br>
              </>
            )}
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                onChange={handleEmailChange}
                value={email}
              ></Form.Control>
              {emailError && <div className="error-msg">{emailError}</div>}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={handlePasswordChange}
                value={pasword}
              />
              {paswordError && <div className="error-msg">{paswordError}</div>}
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
