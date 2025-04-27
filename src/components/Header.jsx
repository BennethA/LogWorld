import React from "react";
import { BiMenu, BiUser, BiX } from "react-icons/bi";
import { CiPlane } from "react-icons/ci";
import { FaMoon, FaSun, FaUserCheck } from "react-icons/fa";

const Header = ({
  setDarkMode,
  darkMode,
  openMenu,
  handleOpenMenu,
  loggedIn,
  handleOpenLogin,
  setOpenUserInfo,
}) => {
  const pages = [
    { link: "#home", title: "Home" },
    { link: "#about", title: "About" },
    { link: "#packages", title: "Tour Packages" },
    { link: "#blogs", title: "Blog" },
  ];

  return (
    <div
      className={`flex justify-between items-center font-bold fixed z-20 w-full top-0 h-[60px] px-[3%] md:px-[5%] lg:px-[8%] backdrop-blur-lg border-b border-white/20`}
    >
      <a
        href="#home"
        className="flex font-extrabold text-[#87b2f1] text-xl md:text-2xl items-center font-serif relative overflow-hidden"
      >
        <CiPlane className="animate-smooth-move text-2xl md:text-3xl -rotate-[30deg]" />
        LogWorld
      </a>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex">
        {pages.map((page, index) => (
          <a
            href={page.link}
            className={`p-2 rounded-md md:text-lg ${
              darkMode
                ? "hover:bg-[#32335acb] active:bg-[#32335acb]"
                : "hover:bg-[#ffffff05] active:bg-[#ffffff05] "
            }`}
            key={index}
          >
            {page.title}
          </a>
        ))}
      </nav>

      {/* Mobile Menu Toggle Button */}
      <div className={`text-[17px] md:hidden flex items-center gap-1`}>
        <div className="cursor-pointer hover:bg-[#ebebebdc] active:bg-[#ebebebdc] hover:text-black p-1 rounded-full">
          {loggedIn ? (
            <FaUserCheck onClick={() => setOpenUserInfo(true)} />
          ) : (
            <BiUser onClick={handleOpenLogin} />
          )}
        </div>
        <div
          onClick={() => setDarkMode(!darkMode)}
          className={`cursor-pointer p-1 rounded-full hover:bg-[#ebebebdc] active:bg-[#ebebebdc]`}
        >
          {darkMode ? (
            <FaSun className="text-white" />
          ) : (
            <FaMoon className="text-gray-800" />
          )}
        </div>
        <div
          onClick={handleOpenMenu}
          className="text-3xl hover:opacity-80 cursor-pointer"
        >
          {openMenu ? <BiX /> : <BiMenu />}
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`fixed inset-0 top-[60px] flex md:hidden flex-col border-r backdrop-blur-lg border-white/20 h-screen overflow-y-auto w-[50%] sm:px-6 p-4 gap-3 mb-3 transition-all duration-500 z-30 ${
          openMenu ? "translate-x-[0%]" : "translate-x-[-100%]"
        } ${
          darkMode
            ? "bg-[#0f0801c9] text-gray-300"
            : "bg-[#f0ebcbe0] text-[#040625]"
        }`}
      >
        {pages.map((page, index) => (
          <a
            onClick={handleOpenMenu}
            href={page.link}
            className={`flex p-3 text-lg font-bold rounded ${
              darkMode
                ? "hover:bg-[#32335a] active:bg-[#32335a]"
                : "hover:bg-[#15152c15] active:bg-[#15152c15] "
            }`}
            key={index}
          >
            {page.title}
          </a>
        ))}

        <a
          href="#contact"
          onClick={handleOpenMenu}
          className="p-3 text-white bg-gradient-to-r from-[#0d0d77] to-[#4d034d] hover:from-[#2727bd] hover:to-[#910f91] active:from-[#2727bd] active:to-[#910f91] rounded italic text-lg font-bold transition-all z-10 cursor-pointer"
        >
          Contact Us
        </a>
      </div>

      {/* Desktop Contact Button */}
      <div className="text-[17px] md:flex hidden gap-1 items-center">
        <div className="cursor-pointer hover:bg-[#ebebebdc] active:bg-[#ebebebdc] hover:text-black p-1 rounded-full">
          {loggedIn ? (
            <FaUserCheck onClick={() => setOpenUserInfo(true)} />
          ) : (
            <BiUser onClick={handleOpenLogin} />
          )}
        </div>
        <div
          onClick={() => setDarkMode(!darkMode)}
          className={`cursor-pointer p-1 rounded-full hover:bg-[#ebebebdc] active:bg-[#ebebebdc]`}
        >
          {darkMode ? (
            <FaSun className="text-white" />
          ) : (
            <FaMoon className="text-gray-800" />
          )}
        </div>
        <a
          href="#contact"
          className="p-3 text-white bg-gradient-to-r from-[#0d0d77] to-[#4d034d] hover:from-[#2727bd] hover:to-[#910f91] active:from-[#2727bd] active:to-[#910f91] rounded italic text-lg font-bold transition-all z-10 cursor-pointer"
        >
          Contact Us
        </a>
      </div>
    </div>
  );
};

export default Header;
