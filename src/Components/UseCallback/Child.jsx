import { memo } from "react";


const Child = ({text , onClick}) =>{

    console.log("child is rendered", text);
    
    return(
       <button onClick={onClick}>{text}</button>
    )
}

export default memo(Child)