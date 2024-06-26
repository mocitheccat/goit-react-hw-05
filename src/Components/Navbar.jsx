import { RiSearch2Line } from "react-icons/ri";
import MobileMenu from "./MobileMenu.jsx";
import { useCallback, useEffect, useState } from "react";
import defaultBlueImage from "../../public/images/default-blue.png";
import logo from "../../public/images/logo.png";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";

const TOP_OFFSET = 30;

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showBackground, setShowBackground] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1023);
  const [isSearchLoacation, setIsSearchLoacation] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const handleResize = useCallback(() => {
    setIsMobile(window.innerWidth <= 1023);
  }, []);

  const handleChange = (value) => {
    setSearchQuery(value);
    console.log(value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim() !== "") {
      console.log("SearchPage query submitted:", searchQuery);
      navigate(`/search?q=${searchQuery}`);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= TOP_OFFSET) {
        setShowBackground(true);
      } else {
        setShowBackground(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  useEffect(() => {
    setIsSearchLoacation(false);
    if (location.pathname.includes("/search")) {
      setIsSearchLoacation(true);
    }
    setShowMobileMenu(isMobile);
  }, [isMobile, location.pathname]);

  return (
    <nav className="w-full fixed z-40">
      <div
        className={`px-4 md:px-16 py-6 flex flex-row items-center transition duration-500 leading-9 ${
          showBackground ? "bg-zinc-900 bg-opacity-90" : ""
        }`}
      >
        <Link to="/">
          <img className="h-5 lg:h-7" src={logo} alt="logo" />
        </Link>
        {!isMobile && (
          <div className="flex-row ml-8 gap-7 hidden lg:flex">
            <NavLink
              to="/movies"
              className={({ isActive }) =>
                `text-white cursor-pointer hover:text-gray-300 transition relative ${
                  isActive
                    ? "after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 after:bg-red-500 after:rounded"
                    : ""
                }`
              }
            >
              Movies
            </NavLink>
            <NavLink
              to="/tv"
              className={({ isActive }) =>
                `text-white cursor-pointer hover:text-gray-300 transition relative ${
                  isActive
                    ? "after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 after:bg-red-500 after:rounded"
                    : ""
                }`
              }
            >
              TV Shows
            </NavLink>
            <NavLink
              to="/profile/my-list"
              className={({ isActive }) =>
                `text-white cursor-pointer hover:text-gray-300 transition relative ${
                  isActive
                    ? "after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 after:bg-red-500 after:rounded"
                    : ""
                }`
              }
            >
              My List
            </NavLink>
          </div>
        )}
        {!isMobile && (
          <div className="flex flex-row ml-auto gap-3 items-center justify-center">
            {!isSearchLoacation && (
              <div className="flex justify-center items-center">
                <form
                  action=""
                  className="relative text-white"
                  onSubmit={(e) => handleSearch(e)}
                >
                  <input
                    type="text"
                    className={`
                  text-transparent
                  cursor-pointer
                  relative
                  z-10
                  w-11
                  leading-4
                  rounded-lg
                  border
                  border-transparent
                  bg-transparent
                  outline-none
                  transition-all
                  duration-350
                  focus:text-white
                  focus:w-[20vw]
                  focus:py-2
                  focus:max-h-[36px]
                  focus:cursor-text
                  focus:border-red-600
                  focus:pl-10
                  focus:pr-4`}
                    onChange={(e) => handleChange(e.target.value)}
                  />
                  <RiSearch2Line
                    className="
                  absolute
                  inset-y-0
                  my-auto
                  w-12
                  border-r
                  border-transparent
                  stroke-gray-500
                  px-3.5
                  peer-focus:border-red-600
                  peer-focus:stroke-red-900"
                  />
                </form>
              </div>
            )}

            <Link
              className="w-9 h-9 lg:w-10 lg:h-10 rounded-md overflow-hidden border-2 border-transparent hover:border-gray-200"
              to="/profile"
            >
              <img
                className="w-9 h-9 lg:w-10 lg:h-10"
                src={defaultBlueImage}
                alt=""
              />
            </Link>
          </div>
        )}
      </div>
      <MobileMenu visible={showMobileMenu} />
    </nav>
  );
};

export default Navbar;
