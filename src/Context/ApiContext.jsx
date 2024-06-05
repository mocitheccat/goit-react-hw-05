// src/context/TMDBContext.jsx
import { createContext, useRef } from "react";
import TMDB from "../API/api.js";

export const TMDBContext = createContext(null);

export const TMDBProvider = ({ children }) => {
  const tmdbRef = useRef(new TMDB(import.meta.env.VITE_TMDB_API_KEY));

  return (
    <TMDBContext.Provider value={tmdbRef.current}>
      {children}
    </TMDBContext.Provider>
  );
};
