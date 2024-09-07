import { useContext } from "react";
import { GlobalContext } from "./Context";

export default function Login() {
  const { theme } = useContext(GlobalContext);

  return (
    <div>
      <h1>Login Here</h1>
      <button
        style={
          theme === "Dark"
            ? { backgroundColor: "red" }
            : { backgroundColor: "whitesmoke" }
        }
      >
        Login
      </button>
    </div>
  );
}
