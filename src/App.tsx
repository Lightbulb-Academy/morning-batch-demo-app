import { Routes, Route, Navigate, Outlet } from "react-router";
import TodoApp from "./pages/TodoApp";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";
import { jwtDecode } from "jwt-decode";

interface DecodedToken {
  exp: number;
  id: number;
  // Add other properties of the decoded token if needed
}

export default function App() {
  const { theme } = useContext(ThemeContext);
  console.log("Theme from context:", theme);
  const ProtectedRoutes = () => {
    const token = localStorage.getItem("token");
    if (token) {
      const decodedToken: DecodedToken = jwtDecode(token);
      console.log("Decoded token:", decodedToken);
      const currentTime = Date.now() / 1000; // Current time in seconds
      if (decodedToken.exp < currentTime || !decodedToken.id) {
        // Token is expired or user_id is not present
        localStorage.removeItem("token");
        return <Navigate to="/login" />;
      }
    }
    return token ? <Outlet /> : <Navigate to="/login" />;
  };

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<ProtectedRoutes />}>
        <Route path="/" element={<TodoApp />} />
        {/* example of nested route */}
        <Route path="/todo-detail" element={<h1>Todo Details</h1>} />
      </Route>
    </Routes>
  );
}
