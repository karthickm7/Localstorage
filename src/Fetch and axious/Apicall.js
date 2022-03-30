import axios from "axios";
import {Form,Nav,Navbar,Container,Table,NavDropdown,Button} from "react-bootstrap";
import { useState, useReducer, useEffect } from "react";
import Putpop from './Putpop'

export const ACTION = {
  GET_USER: "add-user",
  POST_USER: "post-user",
  DELETE_USER: "edit-user",
  PUT_USER:"put-user",
};

let reducer = (state, action) => {
  switch (action.type) {
    case ACTION.GET_USER:
      return [...state, ...action.payload];

    case ACTION.POST_USER:
      return [...state, ...action.payload];

    case ACTION.DELETE_USER:
      return state.filter((user) => user.id !== action.payload);

    case ACTION.PUT_USER:
      let editt = state.findIndex((put) => put.Id === action.payload.Id);
      console.log(editt ,"edit")
      state.splice(editt, 1, action.payload);
      return  state;

    default:
      return state;
  }
};

const Apicall = () => {
  const [user, dispatch] = useReducer(reducer, []);
  console.log(user, "adddispatch");

  const [userr, setUserr] = useState();
  // modal popup [put]
  const [show, setShow] = useState(false);

  const PopupClose = () => {
    setShow(false);
  };
  const PopupShow = () => {
    setShow(true);
  };

  const [postuser, setPostuser] = useState({});
  const handleChange = (e) => {
    setPostuser({ ...postuser, [e.target.name]: e.target.value });
  };

  //GET function
  const getApiData = () => {
    axios
      .get("http://localhost:3006/user")
      .then((res) => {
        console.log(res, "api");
        dispatch({ type: ACTION.GET_USER, payload: res.data });
      })
      .catch((err) => {
        console.log(err, "error");
      });
  };

  //GET
  useEffect(() => {
    getApiData();
  }, []);

  //POST
  const postData = (e) => {
    e.preventDefault();
    let postdata = {
      id: Date.now(),
      // id: postuser.id,
      Name: postuser.Name,
      email: postuser.email,
    };
    axios
      .post("http://localhost:3006/user", postdata)
      .then((res) => {
        console.log(res, "post");
        dispatch({ type: ACTION.POST_USER, payload: res.postdata });
      })
      .catch((err) => {
        console.log(err, "error");
      });
  };

  //Delete
  const handleSubmit = (e, userd) => {
    console.log(userd, "delete");

    e.preventDefault();
    axios
      .delete(`http://localhost:3006/user/${userd}`)
      .then((res) => {
        // console.log(res,"del")
        dispatch({ type: ACTION.DELETE_USER, payload: res.userd });
      })
      .catch((err) => {
        console.log(err, "delete error");
      });
  };

  //PUT
   const editpass =(updated)=>{
     console.log(updated.id,"type")
     axios.put(`http://localhost:3006/user/${updated.id}`,updated)
     .then((res)=>{
       dispatch({type:ACTION.PUT_USER,payload:res})
     }).catch((err)=>
     {console.log(err,'puterr');})


  }
  const handleEdit = (userd) => {
    console.log(userd, "datass");
    PopupShow();
    setUserr(userd);
  };

  const updated =(update)=>{
    editpass(update)
    PopupClose();

  }


  return (
    <>
      <div>
        <h1>Connecting with Axios</h1>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>ID</th>
              <th>name</th>
              <th>User Name</th>
              <th>email</th>
            </tr>
          </thead>
          <tbody>
            {user.map((userd) => {
              return (
                <tr>
                  <td>{userd.id}</td>
                  <td>{userd.Name}</td>
                  <td>{userd.username}</td>
                  <td>{userd.email}</td>
                  <td>
                    <Button onClick={() => {handleEdit(userd);}} variant="dark">EDIT</Button>
                  </td>
                  <td>
                    <Button
                      onClick={(e) => {
                        handleSubmit(e, userd.id);
                      }}
                      variant="warning"
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>

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
          name="email"
          value={postuser.email}
          onChange={handleChange}
          type="text"
          placeholder="email"
        />
        <br />

        <Button onClick={postData} variant="secondary">
          Secondary
        </Button>

        <Putpop puser={userr}show={show} onHide={PopupClose} putpass={editpass }/>
      </div>
    </>
  );
};
export default Apicall;
