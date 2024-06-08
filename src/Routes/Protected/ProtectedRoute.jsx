import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ requiresAuth }) => {
  const username = localStorage.getItem("username");

  if (requiresAuth && !username) {
    return <Navigate to="/login" />;
  }

  if (!requiresAuth && username) {
    return <Navigate to="/" />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
