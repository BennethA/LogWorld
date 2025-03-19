import React, { useState } from "react";
import { BiMenu, BiX } from "react-icons/bi";
import { CiPlane } from "react-icons/ci";

const Header = ({ openMenu, setOpenMenu, handleOpenMenu }) => {
  const pages = [
    { link: "#home", title: "Home" },
    { link: "#about", title: "About" },
    { link: "#packages", title: "Tour Packages" },
    { link: "#blogs", title: "Blog" },
  ];
  return (
    <div className="flex justify-between items-center font-bold bg-[#000020] fixed z-20 w-full top-0 h-[60px] px-[4%] md:px-[6%] lg:px-[9%]">
      <a
        href="#home"
        className="flex font-extrabold text-[#87b2f1] text-xl md:text-2xl items-center"
      >
        <CiPlane className="-rotate-[30deg] text-2xl md:text-3xl" /> LogWorld
      </a>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex gap-6">
        {pages.map((page, index) => (
          <a
            href={page.link}
            className="hover:bg-blue-100 hover:text-black active:bg-blue-200 active:text-black p-2 rounded-md md:text-lg"
            key={index}
          >
            {page.title}
          </a>
        ))}
      </nav>

      {/* Mobile Menu Toggle Button */}
      <div
        onClick={handleOpenMenu}
        className={`md:hidden text-4xl cursor-pointer hover:opacity-80`}
      >
        {openMenu ? <BiX /> : <BiMenu />}
      </div>

      {/* Mobile Navigation */}
      <div
        className={`fixed left-0 gap-1 top-[60px] flex md:hidden flex-col bg-[#000020] h-full scroll-auto w-[65%] sm:px-6 px-4 transition-all duration-500 translate-x-[-100%] ${
          openMenu && "translate-x-[0%]"
        }`}
      >
        {pages.map((page, index) => (
          <a
            onClick={handleOpenMenu}
            href={page.link}
            className="flex p-2 hover:bg-blue-100 hover:text-black active:text-black text-lg font-bold rounded"
            key={index}
          >
            {page.title}
          </a>
        ))}

        <a
          href="#contact"
          onClick={handleOpenMenu}
          className="bg-[#01012c] hover:bg-[#0a0a13] active:bg-[#0a0a13] text-white rounded p-2 md:font-bold md:text-lg"
        >
          Contact Us
        </a>
      </div>

      {/* Desktop Contact Button */}
      <a
        href="#contact"
        className="bg-[#01012c] text-white rounded p-2 md:flex hidden hover:bg-[#0a0a13] active:bg-[#0a0a13] md:text-lg md:font-bold"
      >
        Contact Us
      </a>
    </div>
  );
};

export default Header;
