import { NavLink, useNavigate } from "react-router";
import CustomInput from "../components/CustomInput";
import Button from "../components/Button";
import { useActionState, useEffect, useState } from "react";
import axios from "axios";
import { CircleAlert } from "lucide-react";

interface State {
  token?: string | null;
  error?: string | null;
}

const LoginAction = async (_previousData: State, formData: FormData) => {
  try {
    const fde = formData.entries();
    const payload = Object.fromEntries(fde);

    const response = await axios("http://localhost:8000/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      data: payload,
    });
    return { token: response.data.token };
  } catch (error: any) {
    return {
      error:
        error?.response?.data.message ||
        "Something went wrong! Please try again later.",
    };
  }
};

export default function Register() {
  const token = localStorage.getItem("token") || null;

  const [data, submitAction, isLoading] = useActionState<State, FormData>(
    LoginAction,
    {
      token: token,
      error: null,
    }
  );
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (data?.token) {
      console.log("data", data.token);
      localStorage.setItem("token", data.token);
      navigate("/");
    }

    if (data.error) {
      setError(data.error);
    }
  }, [data, navigate]);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="card flex flex-col items-center py-4 px-8 !h-auto gap-8">
        <h1 className="text-xl font-bold">Login</h1>
        {error ? (
          <div className="w-full flex items-center gap-2 border border-red-500 p-2 rounded-md">
            <CircleAlert size={16} color="red" />
            <p className="text-red-400">{error}</p>
          </div>
        ) : null}
        <form action={submitAction} className="flex flex-col gap-2 w-full">
          <CustomInput required name="username" label="Username" type="text" />
          <CustomInput
            required
            name="password"
            label="Password"
            type="password"
          />
          <Button
            className="mt-4 !w-full"
            type="submit"
            label={isLoading ? "Logging in..." : "Login"}
          />
        </form>
        <p>
          Don't have an account?
          <NavLink className="text-blue-400 ml-2" to="/register">
            Register
          </NavLink>
        </p>
      </div>
    </div>
  );
}
/** 
Form handling
- create form with input fields
- handle form submission
  - create a function to handle form submission - LoginAction
  - create a function to make API call - registerUserAPI
   
*/
