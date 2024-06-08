import Auth from "../../utils/auth.js";
import { Navigate } from "react-router-dom";

const ProtectedLogin = ({ children }) => {
  const username = Auth.readUser();

  if (username) {
    return <Navigate to="/" />;
  }

  return children;
};

export default ProtectedLogin;
