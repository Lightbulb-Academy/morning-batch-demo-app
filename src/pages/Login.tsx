import { NavLink } from "react-router";

export default function Login() {
  return (
    <div className="flex flex-col items-center">
      <h1>Login</h1>
      <NavLink className="text-blue-400" to="/register">
        Register
      </NavLink>
    </div>
  );
}
