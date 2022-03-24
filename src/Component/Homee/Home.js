// import { Button } from "bootstrap";
import React, { useReducer,useEffect, useState } from "react";
import { Nav, Navbar, Container, Table, NavDropdown ,Button} from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";

export const ACTION = {
  ADD_DATA: "add-data",
  TOGGLE_DATA: "toggle-data",
  DELETE_DATA: "delete-data",
};

let reducer = (datas, action) => {
  switch (action.type) {
    case ACTION.ADD_DATA:
      return [...datas, action.payload.row];

    case ACTION.DELETE_DATA:
      return datas.filter((dat=>dat.Id !== action.payload));

    default:
      return datas;
  }
};

export const Home = () => {

  const [datas, dispatch] = useReducer(reducer, []);
  const [row, setRow] = useState("");

  const handleSubmit = (row) => {
    console.log("hiidel",row)
      //  e.preventDefault();
       dispatch({ type: ACTION.DELETE_DATA, payload:row});
      
  };
 

 // all user data 
const [Objcurrentuser, setObjcurrentuser] = useState([]);
 useEffect(() => {
    let local = localStorage.getItem("Detail");
    let Objcurrentuser = JSON.parse(local);
    console.log(Objcurrentuser,"data")
    setObjcurrentuser(Objcurrentuser);
    dispatch({ type: ACTION.ADD_DATA, payload:row });
    console.log(row,'hi')
    setRow("");
  }, []);


 //current user data
  let currentuser= localStorage.getItem('Currentdata')
  let objuser=JSON.parse(currentuser)
 let navigate = useNavigate();
 function logout()
  {
    localStorage.removeItem("Currentdata");
    navigate('/Login');
  }
  console.log(datas,"hiid")

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
              <th>User Id</th>
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
                <td>{row.Id}</td>
                <td>{row.firstname}</td>
                <td>{row.lastname}</td>
                <td>{row.email}</td>
                <td><Button variant="dark" >EDIT</Button></td>
                <td><Button variant='danger'onClick={()=>handleSubmit(row.Id)}>DELETE</Button></td>
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
