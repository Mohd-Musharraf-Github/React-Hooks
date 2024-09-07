import { useContext } from "react"
import { GlobalContext } from "./Context"


export default function UseContextHook(){

    const {setTheme,theme} = useContext(GlobalContext);


    console.log(theme);
    

    return(
        <div>
            <h1>UseContext</h1>
            <button onClick={()=>setTheme( theme==="light" ? "Dark": "light")}>Change Theme</button>
        </div>
    )
}