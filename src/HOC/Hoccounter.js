import React,{useState}from 'react'
import Clickcounter from './Clickcounter'
import Hovercounter from './Hovercounter'

const Hoccounter = OriginalComponent => {
    function NewComponent(props)
    {

       const[count,setCount]=useState(0)
       const increment =()=>
       {
          setCount(count+1)
        }
     return(
             <>
             <OriginalComponent count={count} increment={increment} {...props}/>
             </>
            )

    }

    return NewComponent
}
export default Hoccounter