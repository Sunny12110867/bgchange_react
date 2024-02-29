import React, { useEffect, useRef } from "react";
import { useState } from "react";



function Useref(){
    const [count,setcount]=useState("");
    const prev_Value= useRef();
    useEffect(()=>{
        prev_Value.current=count;
    })

    return(
        <>
            <input type="text" onChange={(e)=>setcount(e.target.value)} />
            <h2>current value is  {count} and the prev value is {prev_Value.current}</h2>

            
        </>
    )
}

export default Useref;

