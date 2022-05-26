import { Paper, Grid, TextField, Button } from '@mui/material';

import React, { useState } from 'react';
import styles from './Signup.module.css';
import { Container } from 'react-bootstrap';

const Signup = () => {
  //commented for testing purpose let navigate = useNavigate();

  const [data, setData] = useState({
    Id: Date.now(),
    firstname: '',
    lastname: '',
    email: '',
    pasword: ''
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    let setDatas = localStorage.getItem('Detail');
    if (setDatas) {
      let objdata = JSON.parse(setDatas);
      objdata.push(data);
      localStorage.setItem('Detail', JSON.stringify(objdata));
    } else {
      localStorage.setItem('Detail', JSON.stringify([data]));
    }
    // commenting for testing navigate('/Login');
  };

  return (
    <>
      <Grid className="queries" align="center">
        <Paper elevation={6} style={{ padding: '10px 20px', width: 400, margin: '10px 10px' }}>
          <form className="queries">
            <h1>SignUp</h1>

            <Container className={styles.cont}>
              <div>
                <TextField
                  className={styles.txf}
                  data-testid="firstname-input"
                  label="First Name"
                  placeholder="Enter first name"
                  type="text"
                  variant="outlined"
                  required
                  onChange={handleChange}
                  value={data.firstname}
                  name="firstname"
                />
              </div>
              <br></br>

              <div>
                <TextField
                  className={styles.txf}
                  data-testid="lastname-input"
                  placeholder="Enter Last name"
                  type="text"
                  label="Last Name"
                  variant="outlined"
                  required
                  onChange={handleChange}
                  value={data.lastname}
                  name="lastname"
                />
              </div>
              <br></br>

              <div>
                <TextField
                  className={styles.txf}
                  data-testid="email-input"
                  label="Email"
                  type="email"
                  placeholder="Enter your email"
                  variant="outlined"
                  required
                  onChange={handleChange}
                  value={data.email}
                  name="email"
                />
                {data.email && !/\S+@\S+\.\S+/.test(data.email) && (
                  <span className="error" data-testid="emailerror-msg">
                    Please enter a valid email.
                  </span>
                )}
              </div>
              <br></br>

              <div>
                <TextField
                  className={styles.txf}
                  data-testid="pasword-input"
                  placeholder="Enter your password"
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
              <Button className={styles.buton} variant="outlined" onClick={handleFormSubmit}>
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
