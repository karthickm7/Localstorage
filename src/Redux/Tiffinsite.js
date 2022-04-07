import { Navbar, Container, Card, Button, Col, Row,Nav } from "react-bootstrap";
import React, { useEffect,useState } from "react";
import { useDispatch, useSelector, connect } from "react-redux";
import { fetchfood } from "../state/action/Action";
import { removefood } from "../state/action/Action";
import { useNavigate, Link } from "react-router-dom";

const Tiffinsite = () => {
  const[del,setDel]=useState(false)
  let dispatch = useDispatch();
  let navigate =useNavigate();
  const foods = useSelector((state) => state.allreducers.foods);
  console.log(foods,'mini')

  useEffect(() => {
    dispatch(fetchfood());
  },[]);

  useEffect(()=>{
     dispatch(fetchfood());
      },[del])
 
  const onDelete =(items)=>{
    dispatch(removefood(items));
    setDel(true)
 }

 const onEdit = (items) => {
  navigate(`/editex/${items}`)
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
          <Nav.Link href="/postux">POST</Nav.Link>
      </Container>

      </Navbar>
      {foods && foods.map((items)=>{
    return (
      <Row xs={1} md={2}>
        <Col xs={2} md={3}>
          <Card key ={items.id} style={{ width: "20rem", height: "20rem" }}>
            <Card.Img variant="top" src={items.url} />
            <Card.Body>
              <Card.Text>
                <p style={{ fontSize: "10px" }}>{items.title}</p>
              </Card.Text>
              </Card.Body>
              <Button
                size="sm"
                style={{
                  width: "44px",
                  height: "25px",
                  padding: "0px !important",
                }}
                onClick={()=>onEdit(items.id)}
                variant="primary"
              >edit
              </Button>
              <Button
                size="sm"
                style={{
                  width: "44px",
                  height: "25px",
                  padding: "0px !important",
                }}
                onClick={()=> onDelete(items.id)}
                variant="primary">Del
              </Button>
               
          </Card>
         
         
        </Col>
       </Row>
    );
              
  })
}

    </>
  );
};

export default Tiffinsite
