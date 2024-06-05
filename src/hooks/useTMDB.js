import { useContext } from "react";
import { TMDBContext } from "../Context/ApiContext.jsx";

export const useTMDB = () => {
  const context = useContext(TMDBContext);
  if (!context) {
    throw new Error("useTMDB must be used within a TMDBProvider");
  }
  return context;
};
