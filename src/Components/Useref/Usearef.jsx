import React, { useEffect, useRef, useState } from "react";

export default function UseRef() {

    const [inputValue,setInputValue] = useState("");
    const previousValue = useRef("");
    const currentRef = useRef("");

    useEffect(()=>{
        previousValue.current = inputValue;
        console.log(previousValue.current);
        
    },[inputValue])

    useEffect(()=>{
        currentRef.current.focus();
    },[])

    
    return(
        <div>
            <input type="text"
            ref={currentRef}
            value={inputValue} 
            onChange={(e)=>setInputValue(e.target.value)}/>
            <h1>input value :{inputValue}</h1>
            <h1> Previous Value :{previousValue.current}</h1>
        </div>
    )
}
