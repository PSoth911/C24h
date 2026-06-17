import { Navigate } from "react-router-dom";

export default function ProtectedRoute({
  children,
  role,
  loginPath = "/login",
}) {
  const token = localStorage.getItem("token");
  const userRole = localStorage.getItem("role");

  if (!token) {
    return <Navigate to={loginPath} replace />;
  }

  if (role && role !== userRole) {
    return <Navigate to={loginPath} replace />;
  }

  return children;
}