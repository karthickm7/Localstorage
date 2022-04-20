import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addsidedish } from "../state/action/Actionside";

const Postsidedish = () => {
  let dispatch = useDispatch();
  const [postsidedish, setPostfood] = useState({
    id: Date.now(),
    title: "",
    url: "",
  });

  const handleChange = (e) => {
    setPostfood({ ...postsidedish, [e.target.name]: e.target.value });
  };

  let navigate = useNavigate();

  const Addfood = (e) => {
    e.preventDefault();

    dispatch(addsidedish(postsidedish));
    navigate("/sidedish");
  };
  return (
    <>
      <Form.Control
        name="title"
        value={postsidedish.title}
        onChange={handleChange}
        size="lg"
        type="text"
        placeholder="Title"
      />
      <br />
      <Form.Control
        name="url"
        value={postsidedish.url}
        onChange={handleChange}
        size="md"
        type="text"
        placeholder="URL"
      />
      <br />
      <Button onClick={Addfood} variant="secondary">
        POST
      </Button>
    </>
  );
};
export default Postsidedish;
