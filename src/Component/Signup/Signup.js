import { Paper, Container, Grid, TextField, Button } from "@mui/material";
import { margin, padding, width } from "@mui/system";

import { useNavigate } from "react-router-dom";

// import { Button } from 'bootstrap';
import React, { useState } from "react";

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
      <Grid align="center">
        <Paper
          elevation={6}
          style={{ padding: "30px 20px", width: 500, margin: "30px auto" }}
        >
          <form className="classes.root">
            <h1>SignUp</h1>

            <div>
              <TextField
                label="First Name"
                variant="outlined"
                required
                onChange={handleChange}
                value={data.firstname}
                name="firstname"
              />
              {/* {fnameError && <div className="error-msg">{fnameError}</div>} */}
            </div>
            <br></br>

            <div>
              <TextField
                label="Last Name"
                variant="outlined"
                required
                onChange={handleChange}
                value={data.lastname}
                name="lastname"
              />
              {/* {lnameError && <div className="error-msg">{lnameError}</div>} */}
            </div>
            <br></br>

            <div>
              <TextField
                label="Email"
                type="email"
                variant="outlined"
                required
                onChange={handleChange}
                value={data.email}
                name="email"
              />
              {/* {emailError && <div className="error-msg">{emailError}</div>} */}
            </div>
            <br></br>

            <div>
              <TextField
                label="Pasword"
                variant="outlined"
                type="password"
                required
                onChange={handleChange}
                value={data.wordp}
                name="pasword"
              />
            </div>
            {/* {paswordError && <div className="error-msg">{paswordError}</div>} */}
            <br></br>
            <div>
              <Button variant="outlined" onClick={handleFormSubmit}>
                SignUp
              </Button>
            </div>
          </form>
        </Paper>
      </Grid>
    </>
  );
};

export default Signup;
