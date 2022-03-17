import { Paper, Container, Grid, TextField, Button } from '@mui/material';
import { margin, padding, width } from '@mui/system';
import Login from './Login';

// import { Button } from 'bootstrap';
import React, { useState } from 'react';
import './signup.css'

const Signup = () => {

  const [firstname, setFirstname] = useState("");
  const [fnameError, setFnameError] = useState("");
  const [lastname, setLastname] = useState("");
  const [lnameError, setLnameError] = useState("");

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [pasword, setPasword] = useState("");
  const [paswordError, setPaswordError] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const [Snup, setSnup] = useState(true);



  const handleEmailChange = (e) => {
    setSuccessMsg("");
    setEmailError("");
    setEmail(e.target.value);

    console.log(e.target.value, "mail");
  }

  const handleFnameChange = (e) => {
    setSuccessMsg("");
    setFnameError("");
    setFirstname(e.target.value);
    console.log(firstname, "fname");

  };

  const handleLnameChange = (e) => {
    setSuccessMsg("");
    setLnameError("");
    setLastname(e.target.value);

  };



  const handlePasswordChange = (e) => {
    setSuccessMsg("");
    setPaswordError("");
    setPasword(e.target.value);
    console.log(pasword);
  };

  
   

  

  const handleFormSubmit = (e) => {

    setSnup(false);
    e.preventDefault();
    const signup = 
    {namef:firstname, namel:lastname, mail:email , wordp:pasword};
    localStorage.setItem("regform" ,JSON.stringify(signup));
    
  




//     if (email !== "") {
//       const emailregex =
//         /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
//       if (emailregex.test(email)) {
//         setEmailError("");
//         if (email === "admin@demo.com") {
//           setEmailError("");
//           if (pasword === "demo") {
//             setSuccessMsg("sucess");
//           }
//           else {
//             setPaswordError("Password doesnt match with Email");
//           }
//         } else {
//           setEmailError("Email does not match with dataBase");
//         }
//       } else {
//         setEmailError("Invalid Email");
//       }
//     } 
//     else {
//       setEmailError("Email Required");
//     }

//     if (pasword !== "") {
//     } else {
//       setPaswordError("Enter Password");
//     };

//     /*firstname Validation  */
//     if (firstname !== "") {

//       if (firstname === !NaN) {
//         setSuccessMsg('');
        
//       } 
//       else {
//         setFnameError('Character only');
      
//       }

//     }
//     else {

//       setFnameError('Enter firstName');

//     }

//     /*Lastname Validation  */
//     if (lastname !== "") {

//       if (lastname === !NaN) {
//         setSuccessMsg("");
        

//       } else {
        
//         setLnameError("characters");
       
//       }

//     }
//     else {
//       setLnameError('Enter Lastname');
//     }
  };


  return (

    <>
      {
        Snup ? (<Grid align='center' >

          <Paper elevation={6} style={{ padding: '30px 20px', width: 500, margin: "30px auto" }}>
            <form className='classes.root'>
              <h1>SignUp</h1>

              {successMsg && (
                <>
                  <div className="success-msg">{successMsg}</div>
                  <br></br>
                </>
              )}

              <div>
                <TextField label='First Name' variant='outlined' required
                  onChange={handleFnameChange} value={firstname} />
                {fnameError && <div className="error-msg">{fnameError}</div>}
              </div>
              <br></br>

              <div>
                <TextField label='Last Name' variant='outlined' required
                  onChange={handleLnameChange} value={lastname} />
                {lnameError && <div className="error-msg">{lnameError}</div>}
              </div>
              <br></br>

              <div>
                <TextField label='Email' type='email' variant='outlined' required
                  onChange={handleEmailChange} value={email} />
                {emailError && <div className="error-msg">{emailError}</div>}
              </div>
              <br></br>

              <div>
                <TextField label='Pasword' variant='outlined' type='password' required
                  onChange={handlePasswordChange} value={pasword} /></div>
              {paswordError && <div className="error-msg">{paswordError}</div>}
              <br></br>
              <div>

                <Button variant="outlined" onClick={handleFormSubmit}>SignUp</Button>
                {/* <Button variant="outlined" onclick={handleLoginSubmit}>Login</Button> */}
              </div>
            </form>
          </Paper>





        </Grid>) : <Login />
      }


    </>
  );
}

export default Signup;