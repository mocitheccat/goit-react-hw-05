import { useNavigate } from "react-router-dom";
import Auth from "../utils/auth.js";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <>
      <button
        onClick={() => {
          Auth.logoutUser();
          navigate("/login");
        }}
        className="h-10 w-full bg-white"
      >
        Logout!
      </button>
    </>
  );
};

export default HomePage;
