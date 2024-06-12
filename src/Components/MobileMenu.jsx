import { NavLink, useLocation } from "react-router-dom";
import {
  RiMovie2Line,
  RiMovieLine,
  RiSearch2Line,
  RiHome2Line,
  RiAccountCircleLine,
} from "react-icons/ri";

const MobileMenu = ({ visible }) => {
  const location = useLocation();

  // Перевірки для динамічних маршрутів
  const isHomeRoute = location.pathname === "/";
  const isMoviesRoute =
    location.pathname.startsWith("/movies") ||
    location.pathname.startsWith("/movie");
  const isSearchRoute = location.pathname.startsWith("/search");
  const isTvRoute = location.pathname.startsWith("/tv");
  const isMyListRoute = location.pathname.startsWith("/my-list");

  if (!visible) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 bg-transparent h-[68px] w-full backdrop-blur-3xl rounded-t-3xl">
      <div className="fixed bottom-2 w-11/12 left-[50%] right-[50%] translate-x-[-50%] bg-zinc-900/95 border-2 border-gray-600 rounded-2xl flex justify-around items-center py-2 text-white h-[50px]">
        <NavLink
          to="/"
          className={() => (isHomeRoute ? "text-red-500" : "text-white")}
        >
          <RiHome2Line className="h-8 w-8" />
        </NavLink>
        <NavLink
          to="/movies"
          className={() => (isMoviesRoute ? "text-red-500" : "text-white")}
        >
          <RiMovie2Line className="h-8 w-8" />
        </NavLink>
        <NavLink
          to="/search"
          className={() => (isSearchRoute ? "text-red-500" : "text-white")}
        >
          <RiSearch2Line className="h-8 w-8" />
        </NavLink>
        <NavLink
          to="/tv"
          className={() => (isTvRoute ? "text-red-500" : "text-white")}
        >
          <RiMovieLine className="h-8 w-8" />
        </NavLink>
        <NavLink
          to="/my-list"
          className={() => (isMyListRoute ? "text-red-500" : "text-white")}
        >
          <RiAccountCircleLine className="h-8 w-8" />
        </NavLink>
      </div>
    </div>
  );
};

export default MobileMenu;
