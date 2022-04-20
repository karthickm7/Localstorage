import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import { editsidedish } from "../state/action/Actionside";

const Editsidedish = () => {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  const [state, setState] = useState({});
  const [editside, setEditside] = useState({
    title: state.title,
    url: state.url,
  });

  const handleChange = (e) => {
    setEditside({ ...editside, [e.target.name]: e.target.value });
  };

  let { id } = useParams();
  console.log(id, "params");

  useEffect(() => {
    const dynamicedit = () => {
      // axios.get(`http://localhost:3006/foods/${id}`)
      axios
        .get(`http://localhost:3007/sidedish/${id}`)
        .then((res) => {
          console.log(res, "edit");
          setState(res.data);
        })
        .catch((err) => {
          console.log(err, "error");
        });
    };
    dynamicedit();
  }, [id]);

  useEffect(() => {
    if (state) {
      setEditside(state);
    }
  }, [state]);

  //onclick update changes
  const Editfood = (e) => {
    e.preventDefault();

    dispatch(editsidedish(editside, id));
    navigate("/sidedish");
  };
  return (
    <>
      <Form.Control
        name="title"
        value={editside.title}
        onChange={handleChange}
        size="lg"
        type="text"
        placeholder="Title"
      />
      <br />
      <Form.Control
        name="url"
        value={editside.url}
        onChange={handleChange}
        size="md"
        type="text"
        placeholder="URL"
      />
      <br />
      <Button onClick={Editfood} variant="secondary">
        Update Data
      </Button>
    </>
  );
};
export default Editsidedish;
