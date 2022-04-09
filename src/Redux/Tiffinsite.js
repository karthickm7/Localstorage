import {Navbar,Container,Card,Button,Col,Row,Nav,NavDropdown} from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchfood } from "../state/action/Action";
import { removefood } from "../state/action/Action";
import { useNavigate, Link } from "react-router-dom";
import { fetchsidedish } from '../state/action/Actionside';
import "../Redux/tiffinsite.css";
import {removesidedish} from '../state/action/Actionside';

const Tiffinsite = () => {
  const [del, setDel] = useState(false);
  let dispatch = useDispatch();
  let navigate = useNavigate();
  const foods = useSelector((state) => state.allreducers.foods);
  const sidedish = useSelector((state) => state.sidereducer.sidedish);
  console.log(sidedish, "miniAdd");
  console.log(foods, "mini");

  useEffect(() => {
    dispatch(fetchfood());
  }, []);

  //delete de-refresh
  useEffect(() => {
    dispatch(fetchfood());
    dispatch(removefood())
    // dispatch(removesidedish());
  }, [del]);

  //delete onclick
  const onDelete = (items) => {
    dispatch(removefood(items));
      //  dispatch(removesidedish(items))
    setDel(true);

  };

  //side dish dispatch
  // useEffect(() => {
  //   dispatch(fetchsidedish())
  // }, [])
  // console.log(sidedish, "sidedish")

  //edit onclick
  const onEdit = (items) => {
    navigate(`/editex/${items}`);
  };
  return (
    <>
      <Navbar  bg="dark" variant="dark">
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
          <NavDropdown title="SIDE DISH" id="basic-nav-dropdown">
          <NavDropdown.Item href="/sidedish">Menu Items</NavDropdown.Item>
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
              {foods&&
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
    </>
  );
};

export default Tiffinsite;
