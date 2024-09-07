import { useCallback, useState } from "react"
import Child from "./Child";


export default function UseCallback(){

    const[count1,setCount1] = useState(0);
    const[count2,setCount2] = useState(0);

    const memoriserSetCount1Function = useCallback(()=>{setCount1(count1+1)},[count1])
    const memoriserSetCount2Function = useCallback(()=>{setCount2(count2+1)},[count2])

    return(
        <div>
            {count1} {count2}
            <Child text={"button1"} onClick={memoriserSetCount1Function} />
            <Child text={"button2"}  onClick={memoriserSetCount2Function}/>
        </div>
    )
}