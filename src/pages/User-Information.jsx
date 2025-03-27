import React from "react";
import Title from "../components/Title";
import { BiX } from "react-icons/bi";

export default function UserInformation({
  userInfo,
  setLoggedIn,
  setOpenUserInfo,
}) {
  return (
    <div
      className={`fixed z-[100] top-[60px] left-0 right-0 flex items-center justify-center backdrop-blur-md flex-col`}
    >
      <div className="text-center max-w-[400px] p-8 rounded-lg bg-[#000020c9] w-full h-screen md:backdrop-blur-lg shadow-lg flex items-center flex-col overflow-y-auto gap-4 relative">
        <BiX
          onClick={() => setOpenUserInfo(false)}
          className="text-4xl hover:opacity-80 absolute top-1 right-1 cursor-pointer"
        />
        <Title text1="USER" text2="INFORMATION" />

        <div className="flex flex-col gap-2 items-start">
          <div className="p-2">Name: {userInfo.name}</div>
          <hr className="h-[1px] w-full opacity-60" />
          <div className="p-2">Email: {userInfo.email}</div>
          <hr className="h-[1px] w-full opacity-60" />
          <div className="p-2">Phone Number: {userInfo.phoneNumber}</div>
          <hr className="h-[1px] w-full opacity-60" />
        </div>

        <button
          onClick={() => {
            setOpenUserInfo(false);
            setLoggedIn(false);
          }}
          className="text-[#87b2f1] bg-[#000020] hover:bg-[#0a0a13] active:bg-[#0a0a13] border-2 border-transparent rounded p-3 px-8 md:text-lg md:font-bold w-full"
        >
          Log Out
        </button>
      </div>
    </div>
  );
}
