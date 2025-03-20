import axios from "axios";
import { useEffect } from "react";
import { NavLink } from "react-router";

export default function Login() {
  const handleAPICall = async () => {
    try {
      const response = await fetch("http://localhost:3000/todos");
      console.log("response from fetch", response);
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleAPICallWithAxios = async () => {
    try {
      const response = await axios("http://localhost:3000/todos");
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    console.log("Page loaded");
    handleAPICall();
    handleAPICallWithAxios();
  }, []);

  return (
    <div className="flex flex-col items-center">
      <h1>Login</h1>
      <NavLink className="text-blue-400" to="/register">
        Register
      </NavLink>
    </div>
  );
}
