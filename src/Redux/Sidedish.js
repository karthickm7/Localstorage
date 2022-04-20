import {
  Navbar,
  Container,
  Card,
  Button,
  Nav,
  NavDropdown,
} from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { removesidedish, fetchsidedish } from "../state/action/Actionside";
import { useNavigate } from "react-router-dom";

const Sidedish = () => {
  const [dele, setDele] = useState(false);
  let dispatch = useDispatch();
  let navigate = useNavigate();

  const sidedish = useSelector((state) => state.sidereducer.sidedish);
  console.log(sidedish, "miniAdd");

  //side dish dispatch
  useEffect(() => {
    dispatch(fetchsidedish());
  }, [dispatch]);
  console.log(sidedish, "sidedish");

  //delete de-refresh
  useEffect(() => {
    dispatch(fetchsidedish());
    dispatch(removesidedish());
  }, [dele, dispatch]);

  //delete onclick
  const onDelete = (items) => {
    dispatch(removesidedish(items));
    setDele(true);
  };

  //edit onclick
  const onEdit = (items) => {
    navigate(`/editsidedish/${items}`);
  };
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            Tiffin{" "}
            <img
              alt=""
              src="navlogo.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            Site
          </Navbar.Brand>

          <Nav.Link href="/postsidedish" className="Link">
            POST
          </Nav.Link>
          <NavDropdown title="Back" id="basic-nav-dropdown">
            {/* <NavDropdown.Divider /> */}
            <NavDropdown.Item href="/tiffinsite">TIFFIN SITE</NavDropdown.Item>
          </NavDropdown>
        </Container>
      </Navbar>
      <div>
        <h1 style={{ textAlign: "center" }}>menu items</h1>
      </div>

      <div className="col-12 col-sm-6 col-md-8">
        <div className="col-12">
          <div className="row-6">
            <div className="col-12">
              {sidedish &&
                sidedish.map((items) => {
                  return (
                    <Card style={{ width: "18rem" }}>
                      <Card.Img variant="top" src={items.url} />
                      <Card.Body>
                        <Card.Title>{items.title}</Card.Title>
                        <Card.Text>Tasty and Spicy</Card.Text>
                        <Button
                          className="me-3"
                          onClick={() => onEdit(items.id)}
                          variant="warning"
                        >
                          EDIT
                        </Button>
                        <Button
                          onClick={() => onDelete(items.id)}
                          variant="danger"
                        >
                          DELETE
                        </Button>
                      </Card.Body>
                    </Card>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidedish;
