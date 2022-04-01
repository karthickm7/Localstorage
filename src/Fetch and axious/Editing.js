import React from "react";
import {Form,Button} from "react-bootstrap";
import { useState,useEffect,useReducer} from "react";
import axios from "axios";
import { useParams ,useNavigate} from "react-router-dom";

const Editing=(props)=>{
    const [editer, dispatch] = useReducer("");
    const[state,setState]=useState({})
    console.log(state)
    
    const[update,setUpdate]=useState(
         { 
              Name:state.Name,
              username:state.username,
              email:state.email }
              )
             
    const handleChange =(e)=>{
        setUpdate({...update,[e.target.name]:e.target.value})
    }

    let {id}=useParams()
    console.log(typeof id,"params")

    useEffect(()=>{
        const dynamicedit=()=>{
            axios.get(`http://localhost:3006/user/${id}`)
            .then((res) => {
                console.log(res)
                // let original=res.data.find((item)=>item.id===id)
                setState(res.data)
                
              })
            .catch((err) => {
              console.log(err, "error");
            });    
          }
          dynamicedit()
      },[])

    useEffect(()=>{
      if(state){
          setUpdate(state)
      }
  },[state])

    
  let navigate = useNavigate();
    const handleput =(e)=>{
      e.preventDefault()

      axios.put(`http://localhost:3006/user/${id}`,update)
      .then((res)=>{
        console.log(update,"state")
      console.log(res)
      navigate("/Apicall")
      }).catch((err)=>{
      console.log(err,'puterr');})
    }


return(
<Form>
  
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>FirstName</Form.Label>
    <Form.Control onChange={handleChange}value={update.Name} name="Name" type="text" placeholder="Enter Name" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Label>lastname</Form.Label>
    <Form.Control onChange={handleChange}value={update.username} name="username" type="text" placeholder="Enter username" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control onChange={handleChange}value={update.email} name="email" type="email" placeholder="Enter email" />
  </Form.Group>

  <Button variant="primary" onClick={handleput}type="submit">
    Save Changes
  </Button>
</Form>
    )
}
export default Editing;