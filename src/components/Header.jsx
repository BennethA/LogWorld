import React from "react";
import { BiMenu, BiUser, BiX } from "react-icons/bi";
import { CiPlane } from "react-icons/ci";
import { FaUserCheck } from "react-icons/fa";

const Header = ({
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
    <div className="flex justify-between items-center font-bold fixed z-20 w-full top-0 h-[60px] px-[3%] md:px-[5%] lg:px-[8%] backdrop-blur-lg border-b border-white/20">
      <a
        href="#home"
        className="flex font-extrabold text-[#87b2f1] text-xl md:text-2xl items-center font-serif"
      >
        <CiPlane className="-rotate-[30deg] text-2xl md:text-3xl" /> LogWorld
      </a>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex gap-1">
        {pages.map((page, index) => (
          <a
            href={page.link}
            className="hover:bg-[#15152cc0] active:bg-[#15152cc0] p-2 rounded-md md:text-lg"
            key={index}
          >
            {page.title}
          </a>
        ))}
      </nav>

      {/* Mobile Menu Toggle Button */}
      <div className={`md:hidden flex items-center gap-4 cursor-pointer`}>
        {loggedIn ? (
          <FaUserCheck
            onClick={() => setOpenUserInfo(true)}
            className="hover:bg-[#15152cc0] active:bg-[#15152cc0] text-2xl p-1 rounded-full"
          />
        ) : (
          <BiUser
            onClick={handleOpenLogin}
            className="hover:opacity-80 text-xl"
          />
        )}
        <div onClick={handleOpenMenu}>
          {openMenu ? (
            <BiX className="text-3xl hover:opacity-80" />
          ) : (
            <BiMenu className="text-3xl hover:opacity-80" />
          )}
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`fixed inset-0 top-[60px] flex md:hidden flex-col bg-[#08082cf3] border-r border-white/20 h-screen overflow-y-auto w-[50%] sm:px-6 p-4 gap-3 mb-3 transition-all duration-500 z-30 ${
          openMenu ? "translate-x-[0%]" : "translate-x-[-100%]"
        }`}
      >
        {pages.map((page, index) => (
          <a
            onClick={handleOpenMenu}
            href={page.link}
            className="flex p-3 hover:bg-[#15152cc0] active:bg-[#15152cc0] text-lg font-bold rounded"
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
      <div className="md:flex hidden gap-3 items-center">
        {loggedIn ? (
          <FaUserCheck
            onClick={() => setOpenUserInfo(true)}
            className="hover:opacity-80 bg-green-900 text-white text-2xl p-1 rounded-full cursor-pointer"
          />
        ) : (
          <BiUser
            onClick={handleOpenLogin}
            className="hover:opacity-80 text-xl cursor-pointer"
          />
        )}
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
