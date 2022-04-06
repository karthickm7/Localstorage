import { Navbar, Container, Card, Button, Col, Row } from "react-bootstrap";
import React, { useEffect } from "react";
import { useDispatch, useSelector, connect } from "react-redux";
import { fetchfood } from "../state/action/Action";

const Tiffinsite = () => {
  let dispatch = useDispatch();
  const foods = useSelector((state) => state.allreducers.foods);
  console.log(foods,'mini')
  

  useEffect(() => {
    dispatch(fetchfood());
  }, []);

   {foods.map((items) => {
    return (
      <Row xs={1} md={2}>
        <Col xs={2} md={3}>
          <Card style={{ width: "10rem", height: "10rem" }}>
            <Card.Img variant="top" src={items.url} />
            <Card.Body>
              <Card.Text>
                <p style={{ fontSize: "15px" }}>{items.title}</p>
              </Card.Text>
              <Button
                size="sm"
                style={{
                  width: "44px",
                  height: "25px",
                  marginRight: "20px",
                  marginBottom: "10px",
                  padding: "0px !important",
                }}
                variant="primary"
              >
                edit
              </Button>
              <Button
                size="sm"
                style={{
                  width: "44px",
                  height: "25px",
                  padding: "0px !important",
                }}
                variant="primary"
              >
                Del
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    );
  });
}
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
        </Container>
      </Navbar>
   
    </>
  );
};

export default Tiffinsite;
