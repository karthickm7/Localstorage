import react,{useState}from 'react'
import  {Button} from 'react-bootstrap'

const Hovercounter =(props)=>{
    
    return(

        <>
       <h2 onMouseOver={props.increment}> {props.name} Hovered {props.count} times</h2>
        </>
    )
}
export default Hovercounter