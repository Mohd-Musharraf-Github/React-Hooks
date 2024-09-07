import React, { createContext, useContext } from "react";
import { GlobalContext } from "./Context";

export default function Register() {
  const {theme} = useContext(GlobalContext)
  return (
    <div>
      <h1>Register Here</h1>
      <button style={theme==="Dark" ? {backgroundColor:"red"}:null}>Register</button>
    </div>
  );
}
