import React, { useEffect,useState } from "react";
import { Nav, Navbar, Container } from "react-bootstrap";

export const Home = () => {

  const [Objcurrentuser,setObjcurrentuser]=useState('');
  useEffect= (()=>{
  let local = localStorage.getItem("Currentdata");
  let Objcurrentuser = JSON.parse(local)
  setObjcurrentuser(Objcurrentuser)},[])

  return (
    <>
      
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">React-Router</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Signup</Nav.Link>
              <Nav.Link href="/Login">Login</Nav.Link>
              {/* {objcurrentuser.email} */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
      <div>
        <h1 style={{ textAlign: "center" }}> welcome Home </h1>
        <h2>{Objcurrentuser.email}</h2>
      </div>
    </>
  );
};
