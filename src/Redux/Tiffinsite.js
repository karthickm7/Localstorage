import {
  Navbar,
  Container,
  Card,
  Button,
  Col,
  Row,
  Nav,
} from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchfood } from "../state/action/Action";
import { removefood } from "../state/action/Action";
import { useNavigate, Link } from "react-router-dom";

const Tiffinsite = () => {
  const [del, setDel] = useState(false);
  let dispatch = useDispatch();
  let navigate = useNavigate();
  const foods = useSelector((state) => state.allreducers.foods);
  const foodsAdd = useSelector((state) => state.postreducer);
  console.log(foodsAdd, "miniAdd");
  console.log(foods, "mini");

  useEffect(() => {
    dispatch(fetchfood());
  }, []);

  useEffect(() => {
    dispatch(fetchfood());
  }, [del]);

  const onDelete = (items) => {
    dispatch(removefood(items));
    setDel(true);
  };

  const onEdit = (items) => {
    navigate(`/editex/${items}`);
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
          <Nav.Link href="/postux" className="Link">POST</Nav.Link>
        </Container>
      </Navbar>
      <div>
        <h1 style={{ textAlign: "center" }}>menu items</h1>
      </div>

      <div className="row">
        <div className="col-12">
          <div className="row">
            <div className="col-12">
              <div className="row">
<div className="col-sm-4">  
{foods &&
  foods.map((items) => {
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
          <Button onClick={() => onDelete(items.id)} variant="danger">
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
        </div>
      </div>
    </>
  );
};

export default Tiffinsite;
