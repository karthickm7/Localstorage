
import React, { useReducer, useEffect,createContext, useState } from "react";
import {Nav,Navbar,Container,Table,NavDropdown,Button} from "react-bootstrap";
import { useNavigate, } from "react-router-dom";
import Popup from "./Popup";
import "./Home.css";


export const ACTION = {
  ADD_DATA: "add-data",
  DELETE_DATA: "delete-data",
  EDIT_DATA: "edit-data",
};

let reducer = (state, action) => {
  console.log("actions=>", action);
  switch (action.type) {
    case ACTION.ADD_DATA:
      return [...state, ...action.payload];

    case ACTION.DELETE_DATA:
      return state.filter((rows) => rows.Id !== action.payload);

    case ACTION.EDIT_DATA:
      let editt = state.findIndex((save) => save.Id === action.payload.Id);
      console.log(editt ,"edit")
      state.splice(editt, 1, action.payload);
      return state;

    default:
      return state;
  }
};

export const rowcontext = createContext({});

export const Home = () => {
  const [roww, setRoww] = useState();


  const [show, setShow] = useState(false);

  const PopupClose = () => {
    setShow(false);
  };
  const PopupShow = () => {
    setShow(true);
  };

  const handleSubmit = (row) => {
    console.log("delete=>", row);
    dispatch({ type: ACTION.DELETE_DATA, payload: row });
  };

  const handlePass = (dat) => {
    console.log("dtat", dat);
    dispatch({ type: ACTION.EDIT_DATA, payload: dat });
    console.log(dispatch, "dispatch");
    setShow(false);
  };

  const handleEdit = (row) => {
    console.log(row, "datass");
    PopupShow();
    setRoww(row);
  };

  const [datas, dispatch] = useReducer(reducer, []);

  console.log("state=>", datas);
  useEffect(() => {
    let local = localStorage.getItem("Detail");
    let Objcurrentuser = JSON.parse(local);
    console.log(Objcurrentuser, "data");
    dispatch({ type: ACTION.ADD_DATA, payload: Objcurrentuser });
  }, []);

  //current user data
  let currentuser = localStorage.getItem("Currentdata");
  let objuser = JSON.parse(currentuser);
  let navigate = useNavigate();
  function logout() {
    localStorage.removeItem("Currentdata");
    navigate("/Login");
  }

  return (
    <rowcontext.Provider value={{
      edit:roww
    }}>
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
            {datas.map((row, index) => {
              return (
                <tr>
                  <td className="data">{index + 1}</td>
                  <td className="data"> {row.Id}</td>
                  <td className="data"> {row.firstname}</td>
                  <td className="data"> {row.lastname}</td>
                  <td className="data"> {row.email}</td>
                  <td>
                    <Button
                      onClick={() => {handleEdit(row);}}
                      variant="dark">
                      EDIT
                    </Button>
                  </td>

                  <td>
                    <Button
                      onClick={() => {handleSubmit(row.Id);}}
                      variant="danger"
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              );
            })}

            <Popup
              // udata={roww}
              show={show}
              onHide={PopupClose}
              pass={handlePass}
            />
          </tbody>
        </Table>
      </div>
    </rowcontext.Provider>
  );
};
