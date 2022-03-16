import React, { useState } from "react";
import Child from "./Child";

const Parent=()=>{
    const[word,setWord]=useState('Paatti')
    return(
        <div>

        <h1>{word}</h1>
        <Child changeWord={word=> setWord(word)}/>
        
        </div>
    );
}
export default Parent