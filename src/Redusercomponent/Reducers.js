import React, {useReducer,useState} from 'react'
import {Form} from "react-bootstrap";

const ACTION ={
    ADD_TODO:'add-todo',
    DECREMENT:' decrement',
}

const reducer=(todos,action)=>{
    switch(action.type){
        case ACTION.ADD_TODO:
            return[...todos,newTodo(name)]
    }

const newTodo = (name) =>{

     return {id:Date.now(),name:name,complete:false}
}  
  

}
export default function Reducers(){

    const [todos,dispatch] = useReducer(reducer,[])
    const [name,setName]=useState('')
    
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch({type:ACTION.ADD_TODO})
        setName('')
    }

    return(
        <>
       <Form.Group onSubmit={handleSubmit} className="mb-3">
    <Form.Label>ToDos</Form.Label>
    <Form.Control placeholder="Enter ToDos" value={name} onChange={e => setName(e.target.value)}/>
  </Form.Group>
        
        </>

    )

}
