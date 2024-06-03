import Input from "./Input";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Auth from "../utils/auth.js";

const Landing = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    Auth.loginUser(username);
    navigate("/");
  };

  return (
    <div className="bg-hero-pattern bg-no-repeat bg-center bg-cover h-full">
      <div className="bg-black w-screen h-screen bg-opacity-50">
        <nav className="px-12 py-5">
          <img src="/public/images/logo.png" className="h-6" alt="Logo" />
        </nav>
        <div className="flex justify-center">
          <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
            <h2 className="text-white text-4xl mb-8 font-semibold">
              Start here
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col gap-4">
                <Input
                  label="Username"
                  onChange={(e) => setUsername(e.target.value)}
                  id="username"
                  type="text"
                  value={username}
                />
              </div>
              <button
                className="bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition"
                type="submit"
              >
                GO!
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
