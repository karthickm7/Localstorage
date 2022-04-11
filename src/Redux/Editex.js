import React from "react";
import { Form, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import { editfoods } from "../state/action/Action";

const Editex = () => {
  // const[edit,setEdit]=useState(false)
  let navigate = useNavigate();
  let dispatch = useDispatch();
  const [state, setState] = useState({});
  const [editfood, setEditfood] = useState({
    title: state.title,
    url: state.url,
  });

  const handleChange = (e) => {
    setEditfood({ ...editfood, [e.target.name]: e.target.value });
  };

  let { id } = useParams();
  console.log(id, "params");

  useEffect(() => {
    const dynamicedit = () => {
      axios
        .get(`http://localhost:3006/foods/${id}`)
        // axios.get(`http://localhost:3007/sidedish/${id}`)
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
      setEditfood(state);
    }
  }, [state]);

  // useEffect(()=>{
  //       dispatch(fetchfood());
  //          },[foods])

  //onclick update changes
  const Editfood = (e) => {
    e.preventDefault();
    dispatch(editfoods(editfood, id));
    // setEdit(true)
    // dispatch(editsidedish(editfood,id))
    navigate("/tiffinsite");
  };
  return (
    <>
      <div>
        <Form.Control
          name="title"
          value={editfood.title}
          onChange={handleChange}
          size="md"
          type="text"
          placeholder="Title"
        />
        <br />
        <Form.Control
          name="url"
          value={editfood.url}
          onChange={handleChange}
          size="md"
          type="text"
          placeholder="URL"
        />
      </div>
      <br />
      <Button onClick={Editfood} variant="secondary">
        Update Data
      </Button>
    </>
  );
};
export default Editex;
