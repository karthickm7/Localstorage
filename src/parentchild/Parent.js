import React, { useState } from "react";
import Child from "./Child";

const Parent=()=>{
    const[word,setWord]=useState('Parent')
    return(
        <div>

        <h1>{word}</h1>
        
        <Child changeWord={wordd=> setWord(wordd)}/>
        
        </div>
    );
}
export default Parent