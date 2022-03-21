import React, { useEffect, useState } from "react";
import { Nav, Navbar, Container, Table } from "react-bootstrap";

export const Home = () => {
  
  const [Objcurrentuser, setObjcurrentuser] = useState([]);

  useEffect(() => {
    let local = localStorage.getItem("Detail");
    let Objcurrentuser = JSON.parse(local);
    console.log(Objcurrentuser);
    setObjcurrentuser(Objcurrentuser);
  }, []);

  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">React-Router</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Signup</Nav.Link>
              <Nav.Link href="/Login">LogOut</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div>
        <h1 style={{ textAlign: "center" }}> welcome Home </h1>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Sl.No</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {Objcurrentuser.map((row,index) => {
                return(
                  <tr>
                <td>{index+1}</td>
                <td>{row.firstname}</td>
                <td>{row.lastname}</td>
                <td>{row.email}</td>
              </tr>
                )

            }
              
            )}
          </tbody>
        </Table>
      </div>
    </>
  );
};
