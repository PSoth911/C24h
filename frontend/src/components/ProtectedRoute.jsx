import { Navigate } from "react-router-dom";

export default function ProtectedRoute({
  children,
  role=[],
}) {
  const token = sessionStorage.getItem("token");
  const userRole = sessionStorage.getItem("role");

  if (!token) {
    return <Navigate to="/auth/login" replace />;
  }

  if (role && role !== userRole) {
    return <Navigate to="/auth/login" replace />;
  }

  return children;
}