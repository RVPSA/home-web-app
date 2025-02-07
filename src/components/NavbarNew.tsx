import { useEffect, useState } from "react";
import { close, logo, menu } from "../assets";
import Button from "./Button";
import { useLocation, useNavigate } from "react-router-dom";

const NavbarNew = () => {
  //<> used for menu and the closed icon (false = show menu icon, true = show close icon)
  const [toggle, setToggle] = useState(false);
  const [activeTab, setActiveTab] = useState("/");

  const { pathname } = useLocation();
  const navigate = useNavigate();

  //<> Use this function to easy undestand of the path naming and the button activation
  const handleActiveTab = () => {
    if (pathname === "/") {
      setActiveTab("/");
    } else if (pathname === "/gallery") {
      setActiveTab("/gallery");
    } else if (pathname === "/contact") {
      setActiveTab("/contact");
    }
  };

  //<> When pathname is changed, this useEffect will trigger
  useEffect(() => {
    handleActiveTab();
  }, [pathname]);

  return (
    <>
      <div className="flex flex-row w-full bg-white p-3 justify-between text-lg font-serif">
        {/* //<> Logo and the name section of navigation bar */}
        <div className="flex flex-row text-center items-center pl-10 md:pl-20">
          <img
            src={logo}
            alt="Deeghayu Resort Logo"
            className="w-20 h-20 md:w-28 md:28 object-contain"
          />
          <p className="hidden md:inline">
            <span className="font-extrabold md:text-xl">Deeghayu</span> <br />
            Resort
          </p>
        </div>
        {/* //<> Button section of the Navigation bar */}
        <div className="hidden md:flex flex-row gap-5 pr-20 items-center">
          <div
            className={`${
              activeTab === "/" && "bg-cyan-500/50 hover:bg-cyan-500/50"
            } hover:bg-amber-400/50 rounded p-2`}
          >
            <Button
              name="Home"
              onClick={() => {
                navigate("/");
              }}
            ></Button>
          </div>
          <div
            className={`${
              activeTab === "/gallery" && "bg-cyan-500/50 hover:bg-cyan-500/50"
            } hover:bg-amber-400/50 rounded p-2`}
          >
            <Button
              name="Gallery"
              onClick={() => {
                navigate("/gallery");
              }}
            ></Button>
          </div>
          <div
            className={`${
              activeTab === "/contact" && "bg-cyan-500/50 hover:bg-cyan-500/50"
            } hover:bg-amber-400/50 rounded p-2`}
          >
            <Button
              name="Contact Us"
              onClick={() => {
                navigate("/contact");
              }}
            ></Button>
          </div>
        </div>

        {/* //<> Displaying menu icons, on the screen < md */}
        <div className="flex md:hidden pr-10 items-center relative">
          {/* //<> Showing the menu and the close image for navigation buttons on the mobile screen */}
          <div
            className="w-5 h-5"
            onClick={() => {
              setToggle(!toggle);
            }}
          >
            <img
              src={!toggle ? menu : close}
              alt="Menu icon"
              className="w-full h-full object-fill cursor-pointer"
            />
          </div>
          {/* //<> Navigation button of the menu list */}
          <div
            className={`${
              toggle ? "flex" : "hidden"
            } absolute z-20 min-h-screen top-24 -right-3 w-screen flex-col items-start pl-8 gap-7 touch-none`}
          >
            <div
              className={`${
                activeTab === "/" && "bg-cyan-500/50 hover:bg-cyan-500/50"
              } hover:bg-amber-400/50 rounded p-2`}
            >
              <Button
                name="Home"
                onClick={() => {
                  navigate("/");
                }}
              ></Button>
            </div>
            <div
              className={`${
                activeTab === "/gallery" &&
                "bg-cyan-500/50 hover:bg-cyan-500/50"
              } hover:bg-amber-400/50 rounded p-2`}
            >
              <Button
                name="Gallery"
                onClick={() => {
                  navigate("/gallery");
                }}
              ></Button>
            </div>
            <div
              className={`${
                activeTab === "/contact" &&
                "bg-cyan-500/50 hover:bg-cyan-500/50"
              } hover:bg-amber-400/50 rounded p-2`}
            >
              <Button
                name="Contact Us"
                onClick={() => {
                  navigate("/contact");
                }}
              ></Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavbarNew;
