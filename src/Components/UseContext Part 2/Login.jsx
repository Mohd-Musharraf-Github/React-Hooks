import { useContext } from "react";
import { GlobalContext } from "./Context2/CreateContext2";

export default function Login() {
  const { theme } = useContext(GlobalContext);
  return (
    <div>
      <h1>Login Here</h1>
      <button
        style={
          theme === "light"
            ? { backgroundColor: "whitesmoke" }
            : { backgroundColor: "lavenderblush" }
        }
      >
        Login
      </button>
    </div>
  );
}
