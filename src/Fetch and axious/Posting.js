import React, { useState, useReducer } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Posting = () => {
  const [dispatch] = useReducer("");

  const [postuser, setPostuser] = useState({
    Name: "",
    username: "",
    email: "",
  });

  const handleChange = (e) => {
    setPostuser({ ...postuser, [e.target.name]: e.target.value });
  };

  let navigate = useNavigate();
  const postData = (e) => {
    e.preventDefault();
    console.log(postuser);

    let postdata = {
      id: Date.now(),
      Name: postuser.Name,
      email: postuser.email,
      username: postuser.username,
    };
    axios
      .post("http://localhost:3006/user", postdata)
      .then((res) => {
        console.log(res, "post");
        dispatch({ type: "post-user", payload: res.postdata });
      })
      .catch((err) => {
        console.log(err, "error");
      });
    navigate("/Apicall");
  };
  return (
    <>
      <Form.Control
        name="Name"
        value={postuser.Name}
        onChange={handleChange}
        size="lg"
        type="text"
        placeholder="Name"
      />
      <br />
      <Form.Control
        name="username"
        value={postuser.username}
        onChange={handleChange}
        size="md"
        type="text"
        placeholder="user Name"
      />
      <br />
      <Form.Control
        name="email"
        value={postuser.email}
        onChange={handleChange}
        type="text"
        placeholder="email"
      />
      <br />

      <Button onClick={postData} variant="secondary">
        POST
      </Button>
    </>
  );
};
export default Posting;
