import React from "react";

const Child = (props)=>{
    return(
        <div>
            <h1>Child</h1>
            <button onClick={()=>props.changeWord('Hello')}>Click to change title</button>
        </div>
    );
}

export default Child;