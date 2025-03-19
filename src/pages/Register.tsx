import { NavLink } from "react-router";

export default function Register() {
  return (
    <div className="flex flex-col items-center">
      <h1>Register</h1>
      <NavLink className="text-blue-400" to="/login">
        Login
      </NavLink>
    </div>
  );
}
