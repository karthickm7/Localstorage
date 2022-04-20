import { useState } from "react"

const Greeting =()=>{
    const [changetext,setChangetext]=useState(false);
    const changetexthandler=()=>{
           setChangetext(true)
    }
    return(
        <div>
            <h1>Hello Im gonna test now</h1>
            {!changetext&&<p>its good to test this code</p>}
            {changetext&&<p>changed</p>}
            <button onClick={changetexthandler}>CHANGE TEXT</button>
        </div>
    )
}
export default Greeting