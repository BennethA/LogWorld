import React, { useState } from "react";
import { BiMenu, BiX } from "react-icons/bi";
import { CiPlane } from "react-icons/ci";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleOpenMenu = () => {
    setOpenMenu(!openMenu);
  };
  const pages = [
    { link: "#home", title: "Home" },
    { link: "#about", title: "About" },
    { link: "#packages", title: "Tour Packages" },
    { link: "#blogs", title: "Blog" },
  ];
  return (
    <div className="flex justify-between gap-4 items-center font-bold bg-[#000020] fixed z-20 right-0 left-0 top-0 h-[60px] sm:px-[5%] p-3 lg:px-[13%] text-lg md:text-xl">
      <a
        href="#home"
        className="flex font-extrabold text-[#87b2f1] text-2xl items-center"
      >
        <CiPlane className="-rotate-[30deg] text-3xl" /> LogWorld
      </a>
      <nav className="justify-between gap-5 hidden md:flex">
        {pages.map((page, index) => (
          <a
            href={page.link}
            className="flex active:bg-blue-100 hover:bg-blue-100 hover:text-black active:text-black p-2 rounded"
            key={index}
          >
            {page.title}
          </a>
        ))}
      </nav>
      {
        <div
          className={`fixed left-0 bottom-0 gap-1 top-[60px] flex md:hidden flex-col bg-[#01012c] w-[60%] p-3 transition-all duration-500 translate-x-[-100%] ${
            openMenu ? "translate-x-[0%]" : ""
          }`}
        >
          {pages.map((page, index) => (
            <a
              onClick={handleOpenMenu}
              href={page.link}
              className="flex p-2 hover:bg-blue-100 hover:text-black active:text-black rounded"
              key={index}
            >
              {page.title}
            </a>
          ))}

          <a
            href="#contact"
            onClick={handleOpenMenu}
            className="bg-[#87b2f1] hover:opacity-80 active:opacity-80 text-white rounded p-2"
          >
            Contact Us
          </a>
        </div>
      }

      <a
        href="#contact"
        className="bg-[#87b2f1] text-white rounded p-2 md:flex hidden hover:opacity-80 active:opacity-80"
      >
        Contact Us
      </a>
      <div
        onClick={handleOpenMenu}
        className={`md:hidden text-4xl cursor-pointer hover:opacity-80`}
      >
        {openMenu ? <BiX /> : <BiMenu />}
      </div>
    </div>
  );
};

export default Header;
