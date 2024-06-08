import { NavLink } from "react-router-dom";
import { LiaHomeSolid } from "react-icons/lia";
import { TbMovie } from "react-icons/tb";
import { PiTelevisionSimpleBold } from "react-icons/pi";
import { FaRegBookmark } from "react-icons/fa6";

const MobileMenu = ({ visible }) => {
  if (!visible) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-zinc-900 border-t-2 border-gray-800 flex justify-around items-center py-2 text-white h-[80px]">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "text-red-500" : "text-white"
        }
      >
        <LiaHomeSolid className="h-10 w-10" />
      </NavLink>
      <NavLink
        to="/movies"
        className={({ isActive }) =>
          isActive ? "text-red-500" : "text-white"
        }
      >
        <TbMovie className="h-10 w-10" />
      </NavLink>
      <NavLink
        to="/series"
        className={({ isActive }) =>
          isActive ? "text-red-500" : "text-white"
        }
      >
        <PiTelevisionSimpleBold className="h-10 w-10" />
      </NavLink>
      <NavLink
        to="/my-list"
        className={({ isActive }) =>
          isActive ? "text-red-500" : "text-white"
        }
      >
        <FaRegBookmark className="h-8 w-10" />
      </NavLink>
    </div>
  );
};

export default MobileMenu;
