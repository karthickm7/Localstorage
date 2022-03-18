import React from 'react'
import {Nav,Navbar,Container} from "react-bootstrap"

export const Home = () =>{

    return(
<>
<Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">React-Router</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">Link</Nav.Link>
     </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>

<h1 style={{textAlign: "center"}}> welcome Home </h1>
</>

    )
}