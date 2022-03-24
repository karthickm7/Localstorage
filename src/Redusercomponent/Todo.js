import { ActionTypes } from '@mui/base';
import React from 'react'
import { Button } from "react-bootstrap";
import {ACTION} from './Reducers'


 const Todo=({to, dispatch})=> {
     console.log(to,dispatch)
     const handleDelete=()=>{
        dispatch({type:ACTION.DELETE_TODO,payload:to.id})
     }
  return (
      <div>
        <span style={{color:to.complete ? '#AAA' : '#000'}}>{to.name}</span>

     <Button  onClick={()=> dispatch({type:ACTION.TOGGLE_TODO,payload:{id:to.id}})}>Toggle</Button>
     <Button onClick={handleDelete}>Delete</Button>
      </div>

      
  )
}
export default Todo
