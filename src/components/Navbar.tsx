import { useEffect, useState } from "react";
import { menu, close, logo } from "../assets";
import { useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  //Get Current Location
  const { pathname } = useLocation();
  const [toggle, setToggle] = useState(false);
  const [active, setActive] = useState("");
  const navigate = useNavigate();

  const setCurrentActiveTab = () => {
    if (pathname === "/") setActive("Home");
    else if (pathname === "/gallery") setActive("Gallery");
    else if (pathname == "/contact") setActive("Contact Us");
  };
  useEffect(() => {
    setCurrentActiveTab();
  }, [pathname]);

  return (
    <nav className="w-full flex flex-row justify-between items-center p-5 fixed top-0 z-20 bg-gradient-to-t from-lima-200 to-lima-100 shadow-lg ">
      <div className="flex flex-row justify-start items-center gap-1">
        <img
          src={logo}
          alt="Deeghayu Resort Logo"
          className="w-20 h-20 md:w-36 md:h-28 object-contain"
        />
        <p className="text-lime-950 text-[20px] md:text-[25px] font-bold cursor-pointer flex ">
          Deeghayu <br></br>Resort
        </p>
      </div>

      <ul className="list-none hidden md:flex flex-row gap-10 ">
        <li
          onClick={() => {
            navigate("/");
          }}
          className={`${
            active === "Home" &&
            "text-white bg-gradient-to-r from-lima-800 to-lima-700"
          } cursor-pointer rounded-md p-4 hover:bg-gradient-to-r from-lima-700`}
        >
          Home
        </li>
        <li
          onClick={() => {
            navigate("/gallery");
          }}
          className={`${
            active === "Gallery" &&
            "text-white bg-gradient-to-r from-lima-800 to-lima-700"
          } cursor-pointer rounded-md p-4 hover:bg-gradient-to-r from-lima-700`}
        >
          Gallery
        </li>
        <li
          onClick={() => {
            navigate("/contact");
          }}
          className={`${
            active === "Contact Us" &&
            "text-white bg-gradient-to-r from-lima-800 to-lima-700"
          } cursor-pointer rounded-md p-4 hover:bg-gradient-to-r from-lima-700`}
        >
          Contact Us
        </li>
      </ul>

      <div className="md:hidden">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain cursor-pointer"
          onClick={() => {
            setToggle(!toggle);
          }}
        />

        <div
          className={`${
            toggle ? "flex" : "hidden"
          }  p-6  absolute top-15 right-0 rounded-xl z-10 min-w-[140px]`}
        >
          <ul className="list-none flex flex-col justify-end items-start gap-2">
          <li
          onClick={() => {
            navigate("/");
          }}
          className={`${
            active === "Home" &&
            "text-white bg-gradient-to-r from-lima-800 to-lima-700"
          } cursor-pointer rounded-md p-4 hover:bg-gradient-to-r from-lima-700`}
        >
          Home
        </li>
        <li
          onClick={() => {
            navigate("/gallery");
          }}
          className={`${
            active === "Gallery" &&
            "text-white bg-gradient-to-r from-lima-800 to-lima-700"
          } cursor-pointer rounded-md p-4 hover:bg-gradient-to-r from-lima-700`}
        >
          Gallery
        </li>
        <li
          onClick={() => {
            navigate("/contact");
          }}
          className={`${
            active === "Contact Us" &&
            "text-white bg-gradient-to-r from-lima-800 to-lima-700"
          } cursor-pointer rounded-md p-4 hover:bg-gradient-to-r from-lima-700`}
        >
          Contact Us
        </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
