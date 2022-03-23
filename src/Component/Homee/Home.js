import React, { useEffect, useState } from "react";
import { Nav, Navbar, Container, Table, NavDropdown } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";

export const Home = () => {
  
  const [Objcurrentuser, setObjcurrentuser] = useState([]);

  useEffect(() => {
    let local = localStorage.getItem("Detail");
    let Objcurrentuser = JSON.parse(local);
    console.log(Objcurrentuser);
    setObjcurrentuser(Objcurrentuser);
  }, []);

  let currentuser= localStorage.getItem('Currentdata')
  let objuser=JSON.parse(currentuser)
 let navigate = useNavigate();
 function logout()
  {
    localStorage.removeItem("Currentdata");
    navigate('/Login');
  }

  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">React-Router</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Signup</Nav.Link>
              
            </Nav>
            <Nav>
              <NavDropdown title={objuser.firstname}>
                <NavDropdown.Item onClick={logout}>LogOut</NavDropdown.Item>

              </NavDropdown>


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
                <td>edit</td>
                <td>del</td>
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
