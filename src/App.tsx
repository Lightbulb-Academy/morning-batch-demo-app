import { Routes, Route, Navigate, Outlet } from "react-router";
import TodoApp from "./pages/TodoApp";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";

export default function App() {
  const { theme } = useContext(ThemeContext);
  console.log("Theme from context:", theme);
  const ProtectedRoutes = () => {
    const token = localStorage.getItem("token");
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
