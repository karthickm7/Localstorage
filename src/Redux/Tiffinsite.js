import { Navbar, Container, Card, Button, Nav, NavDropdown } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchfood, removefood } from '../state/action/Action';

import { useNavigate } from 'react-router-dom';
import '../Redux/tiffinsite.css';

const Tiffinsite = () => {
  const [del, setDel] = useState(false);
  let dispatch = useDispatch();
  let navigate = useNavigate();
  const foods = useSelector((state) => state.allreducers.foods);
  const sidedish = useSelector((state) => state.sidereducer.sidedish);
  console.log(sidedish, 'miniAdd');
  console.log(foods, 'mini');

  useEffect(() => {
    dispatch(fetchfood());
  }, [dispatch]);

  //delete de-refresh
  useEffect(() => {
    dispatch(fetchfood());
    dispatch(removefood());
  }, [del, dispatch]);

  //delete onclick
  const onDelete = (items) => {
    dispatch(removefood(items));
    setDel(true);
  };

  //edit onclick
  const onEdit = (items) => {
    navigate(`/editex/${items}`);
  };
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            Tiffin{' '}
            <img
              alt=""
              src="navlogo.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Site
          </Navbar.Brand>

          <Nav.Link href="/postux" className="Link">
            POST
          </Nav.Link>
          <NavDropdown title="SIDE DISH" id="basic-nav-dropdown">
            <NavDropdown.Item href="/sidedish">Menu Items</NavDropdown.Item>
          </NavDropdown>
        </Container>
      </Navbar>
      <div>
        <h1 style={{ textAlign: 'center' }}>menu items</h1>
      </div>

      <div className="col-12 col-sm-6 col-md-8">
        <div className="col-12">
          <div className="row-6">
            <div className="col-12">
              {foods &&
                foods.map((items) => {
                  return (
                    <Card key={items.id} style={{ width: '18rem' }}>
                      <Card.Img variant="top" src={items.url} />
                      <Card.Body>
                        <Card.Title>{items.title}</Card.Title>
                        <Card.Text>Tasty and Spicy</Card.Text>
                        <Button className="me-3" onClick={() => onEdit(items.id)} variant="warning">
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
