import React,{ useState } from "react";
import {Form,Button} from "react-bootstrap";

import { useNavigate} from "react-router-dom";
import { useDispatch } from "react-redux";
import {addfood} from '../state/action/Action';


const Postux =()=>{
  let dispatch = useDispatch();
  const [postfood, setPostfood] = useState({
        id:Date.now(),
        title:"",
        url:""
    });
    
      const handleChange = (e) => {
        setPostfood({ ...postfood, [e.target.name]: e.target.value });
      };

    let navigate = useNavigate();

    const Addfood =(e)=>{
      e.preventDefault()
      dispatch(addfood(postfood));
      // dispatch(addsidedish(postfood))
      navigate('/tiffinsite')
    }
return(
    <>
    <Form.Control
        name="title"
        value={postfood.title}
        onChange={handleChange}
        size="lg"
        type="text"
        placeholder="Title"
      />
      <br />
      <Form.Control
        name="url"
        value={postfood.url}
        onChange={handleChange}
        size="md"
        type="text"
        placeholder="URL"
      />
      <br />
      <Button onClick={Addfood} variant="secondary">
        POST 
      </Button>
      </>
)
    
}
export default Postux; 
