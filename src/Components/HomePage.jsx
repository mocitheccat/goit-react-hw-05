import { useNavigate } from "react-router-dom";
import Auth from "../utils/auth.js";
import Navbar from "./Navbar.jsx";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
    </>
  );
};

export default HomePage;
