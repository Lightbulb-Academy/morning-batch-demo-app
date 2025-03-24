import { NavLink, useNavigate } from "react-router";
import CustomInput from "../components/CustomInput";
import Button from "../components/Button";
import { useActionState, useEffect } from "react";
import axios from "axios";

const RegisterAction = async (_previousData: null, formData: FormData) => {
  try {
    const fde = formData.entries();
    const payload = Object.fromEntries(fde);

    const response = await axios("http://localhost:8000/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      data: payload,
    });
    return response.data;
  } catch (error) {
    console.error(error);
    return error;
  }
};

export default function Register() {
  const [data, submitAction, isLoading] = useActionState(RegisterAction, null);
  const navigate = useNavigate();

  useEffect(() => {
    if (data?.token) {
      localStorage.setItem("token", data.token);
      navigate("/");
    }
  }, [data, navigate]);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="card flex flex-col items-center py-4 px-8 !h-auto gap-8">
        <h1 className="text-xl font-bold">Register</h1>
        <form action={submitAction} className="flex flex-col gap-2 w-full">
          <CustomInput name="name" label="Name" type="text" />
          <CustomInput name="email" label="Email" type="email" />
          <CustomInput name="mobile" label="Phone" type="tel" />
          <CustomInput name="password" label="Password" type="password" />
          <Button
            type="submit"
            label={isLoading ? "Registering..." : "Register"}
          />
        </form>
        <NavLink className="text-blue-400" to="/login">
          Login
        </NavLink>
      </div>
    </div>
  );
}
/** 
Form handling
- create form with input fields
- handle form submission
  - create a function to handle form submission - RegisterAction
  - create a function to make API call - registerUserAPI
   
*/
