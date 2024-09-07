import { useContext } from "react"
import { GlobalContext } from "./Context2/CreateContext2"


export default function UseContextHook(){
   const {setTheme,theme} = useContext(GlobalContext)
   console.log(theme);
   
    return(
        <div>
            <h1>Change Theme Here</h1>
            <button onClick={()=>setTheme(theme==="light"?"dark":"light")}>Change Theme</button>

        </div>
    )
}