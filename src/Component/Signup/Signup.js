
import {Paper,Grid, TextField, Button} from "@mui/material" ;
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import styles from "./Signup.module.css";
import { Container } from "react-bootstrap";


const Signup = () => { 

 let navigate = useNavigate();
  
  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    pasword: "",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    let setData = localStorage.getItem("Detail");
    if (setData) {
      let objdata = JSON.parse(setData);
      objdata.push(data);
      localStorage.setItem("Detail", JSON.stringify(objdata));
    } else {
      localStorage.setItem("Detail", JSON.stringify([data]));
    }
    navigate("/Login");
  };

  return (
    <>
      <Grid  className="queries" align="center" >
        <Paper
          elevation={6}
          
          style={{ padding: "10px 20px", width: 400, margin: "10px 10px", }}
        >
          
          <form className="queries" >
            <h1>SignUp</h1>
            
            <Container className={styles.cont}>
            <div >
              <TextField
                className={styles.txf}
                label="First Name"
                variant="outlined"
                required
                onChange={handleChange}
                value={data.firstname}
                name="firstname"
              />
            </div>
            <br></br>

            <div >
              <TextField
                className={styles.txf}
                label="Last Name"
                variant="outlined"
                required
                onChange={handleChange}
                value={data.lastname}
                name="lastname"
              />
            </div>
            <br></br>

            <div >
              <TextField
               className={styles.txf}
                label="Email"
                type="email"
                variant="outlined"
                required
                onChange={handleChange}
                value={data.email}
                name="email"
              />
            </div>
            <br></br>

            <div >
              <TextField
               className={styles.txf}
                label="Pasword"
                variant="outlined"
                type="password"
                required
                onChange={handleChange}
                value={data.wordp}
                name="pasword"
              />
            </div>

            <br></br>
            </Container> 
            <div>
              <Button  className={styles.buton} variant="outlined" onClick={handleFormSubmit}>
                Sign Up
              </Button>
            </div>
            
          </form>
         
        </Paper>
      </Grid>
    </>
  );
};

export default Signup;
