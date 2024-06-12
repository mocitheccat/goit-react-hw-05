import { NavLink } from "react-router-dom";
import { RiMovie2Line } from "react-icons/ri";
import { RiMovieLine } from "react-icons/ri";
import { RiSearch2Line } from "react-icons/ri";
import { RiHome2Line } from "react-icons/ri";
import { RiAccountCircleLine } from "react-icons/ri";

const MobileMenu = ({ visible }) => {
  if (!visible) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 bg-zinc-900 h-[68px] w-full">
      <div className="fixed bottom-2 w-11/12 left-[50%] right-[50%] translate-x-[-50%] bg-zinc-900/95 border-2 border-gray-600  rounded-2xl flex justify-around items-center py-2 text-white h-[50px]">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-red-500" : "text-white"
          }
        >
          <RiHome2Line className="h-8 w-8" />
        </NavLink>
        <NavLink
          to="/movies"
          className={({ isActive }) =>
            isActive ? "text-red-500" : "text-white"
          }
        >
          <RiMovie2Line className="h-8 w-8" />
        </NavLink>
        <NavLink
          to="/search"
          className={({ isActive }) =>
            isActive ? "text-red-500" : "text-white"
          }
        >
          <RiSearch2Line className="h-8 w-8" />
        </NavLink>
        <NavLink
          to="/series"
          className={({ isActive }) =>
            isActive ? "text-red-500" : "text-white"
          }
        >
          <RiMovieLine className="h-8 w-8" />
        </NavLink>
        <NavLink
          to="/my-list"
          className={({ isActive }) =>
            isActive ? "text-red-500" : "text-white"
          }
        >
          <RiAccountCircleLine className="h-8 w-8" />
        </NavLink>
      </div>
    </div>
  );
};

export default MobileMenu;
