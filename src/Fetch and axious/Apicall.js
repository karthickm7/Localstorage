import axios from "axios";
import { Table, Button } from "react-bootstrap";
import { useState, useReducer, useEffect } from "react";

import styles from "./Apicall.module.css";

import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

export const ACTION = {
  GET_USER: "add-user",
  POST_USER: "post-user",
  DELETE_USER: "edit-user",
  PUT_USER: "put-user",
};

let reducer = (state, action) => {
  switch (action.type) {
    case ACTION.GET_USER:
      return [...action.payload];

    case ACTION.POST_USER:
      return [...state, ...action.payload];

    case ACTION.DELETE_USER:
      return state.filter((user) => user.id !== action.payload);

    case ACTION.PUT_USER:
      console.log(action, "edit");

      return state;

    default:
      return state;
  }
};

const Apicall = () => {
  const [user, dispatch] = useReducer(reducer, []);
  const [edit, setEdit] = useState([]);
  console.log(user, "adddispatch");

  //To neglect reloading
  useEffect(() => {
    if (user.length > 0) {
      setEdit(user);
    }
  }, [user]);

  const [setUserr] = useState();

  //GET function
  const getApiData = () => {
    axios
      .get("http://localhost:3006/user")
      .then((res) => {
        console.log(res, "api");
        dispatch({ type: ACTION.GET_USER, payload: res.data });
      })
      .catch((err) => {
        toast.error("Error Notification !");

        console.log(err, "error");
      });
  };

  //GET
  useEffect(() => {
    getApiData();
  }, []);

  //Delete
  const handleSubmit = (e, userd) => {
    console.log(userd, "delete");

    e.preventDefault();
    axios
      .delete(`http://localhost:3006/user/${userd}`)
      .then(() => {
        // console.log(res,"del")
        dispatch({ type: ACTION.DELETE_USER, payload: userd });
      })
      .catch((err) => {
        toast.error("Error occured while Delete!");
        console.log(err, "delete error");
      });
  };

  //PUT
  const handleEdit = (userd) => {
    console.log(userd, "datass");

    navigate(`/Editing/${userd}`);

    setUserr(userd);
  };

  // // // Put Binding method
  // // const updated =(update)=>{
  // //   editpass(update)
  // //   PopupClose();

  // }
  let navigate = useNavigate();

  return (
    <div>
      <h1>Connecting with Axios</h1>
      <ToastContainer />
      <Table className={styles.tabl} striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>ID</th>
            <th>name</th>
            <th>User Name</th>
            <th>email</th>
            <th>EDIT</th>
            <th>DELETE</th>
          </tr>
        </thead>
        <tbody>
          {edit.map((userd) => {
            return (
              <tr>
                <td>{userd.id}</td>
                <td>{userd.Name}</td>
                <td>{userd.username}</td>
                <td>{userd.email}</td>
                <td>
                  <Button
                    onClick={() => {
                      handleEdit(userd.id);
                    }}
                    variant="dark"
                  >
                    EDIT
                  </Button>
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
      <Button onClick={() => navigate("/Posting")}>POST DATA</Button>
      <>
        {/* <Putpop binding={updated} puser={userr}show={show} onHide={PopupClose} /> */}
      </>
    </div>
  );
};
export default Apicall;
