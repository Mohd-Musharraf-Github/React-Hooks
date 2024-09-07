import React, { useEffect, useLayoutEffect, useRef } from "react"

export default function UseLayoutEffect(){

    const divref = useRef();
    const inputRef = useRef();

    useEffect(()=>{
        console.log("useeffect (~_~)(*_*)");
        inputRef.current.value = "john Doe"
    },[])

    useLayoutEffect(()=>{

        const divRefCurrent = divref.current;
        console.log(divRefCurrent);

        divRefCurrent.style.opacity = 0;
        divRefCurrent.style.color = "green";
        

        setTimeout(()=>{
            divRefCurrent.style.opacity = 1;
            divRefCurrent.style.color = "red";
        },3000)
        

        console.log("uselayouteffect (-_-)(^_^) ^_^ (#_#) ");
        console.log(inputRef.current);
        
        
        
    },[])



    return(
        <div>
            <h1>Use Layout Effect!!!</h1>
            <h2 ref={divref} style={ {color : "green"}}>(^_^)</h2>
            <input ref={inputRef} type="text" value={"Undertaker"} />
        </div>
    )

}