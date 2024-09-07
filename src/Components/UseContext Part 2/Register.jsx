import { useContext } from "react";
import { GlobalContext } from "./Context2/CreateContext2";

export default function Register() {
  const { theme } = useContext(GlobalContext);
  return (
    <div>
      <h1>Register Here</h1>
      <button
        style={
          theme === "light"
            ? { backgroundColor: "whitesmoke" }
            : { backgroundColor: "lavenderblush" }
        }
      >
        Register
      </button>
    </div>
  );
}
