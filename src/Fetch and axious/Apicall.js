import axios from "axios";

import {
  Form,
  Nav,
  Navbar,
  Container,
  Table,
  NavDropdown,
  Button,
} from "react-bootstrap";
import { useState, useReducer, useEffect } from "react";

export const ACTION = {
  GET_USER: "add-user",
  POST_USER: "post-user",
  EDIT_USER: "edit-user",
};

let reducer = (state, action) => {
  switch (action.type) {
    case ACTION.GET_USER:
      return [...state, ...action.payload];
    case ACTION.POST_USER:
       return [ action.payload];  
  }
};

const Apicall = () => {
  const [user, dispatch] = useReducer(reducer, []);
  console.log(user, "adddispatch");

  const [postuser,setPostuser]=useState('');
  
   const handleChange=(e)=>{
    setPostuser({ ...postuser, [e.target.name]: e.target.value });
  }

  




  useEffect(() => {
    axios
      .get("http://localhost:3006/user")
      .then((res) => {
        console.log(res, "api");
        dispatch({ type: ACTION.GET_USER, payload: res.data });
      })
      .catch((err) => {
        console.log(err, "error");
      });
  }, []);

  const postData = (e)=>{
      e.preventDefault();
      axios.post("http://localhost:3006/user",{postuser
          }).then(res => {
              console.log(res,"post")
              dispatch({type:ACTION.POST_USER,payload:res})
          }).catch((err) => {
            console.log(err, "error");
          });

  }
  return (

  <>

  <div>
      <h1>Connecting with Axios</h1>
     <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>sl.no</th>
            <th>ID</th>
            <th>name</th>
            <th>email</th>
          </tr>
        </thead>
        <tbody>
          {user.map((userd, index) => {
            return (
              <tr>
                <td>{index + 1}</td>
                <td>{userd.id}</td>
                <td>{userd.name}</td>
                <td>{userd.email}</td>
                <td>
                    <Button variant="dark">EDIT</Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>

      <Form.Control name="Name" value={postuser.Name} onChange={handleChange} size="lg" type="text" placeholder="Name" />
      <br />
      <Form.Control name="email"value={postuser.email} onChange={handleChange}type="text" placeholder="email" />
      <br />

      <Button onClick={postData} variant="secondary">Secondary</Button>
    
    </div>
</>
  );
};
export default Apicall;
