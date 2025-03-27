import React from "react";
import Title from "../components/Title";
import { BiX } from "react-icons/bi";

export default function Login({
  userInfo,
  setUserInfo,
  errors,
  setErrors,
  setLoggedIn,
  setOpenLogin,
  handleOpenRegister,
  handleOpenForgotPassword,
}) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const registeredUsers = localStorage.getItem("registeredUsers");

    if (registeredUsers) {
      const parsedUsers = JSON.parse(registeredUsers);
      const foundUser = parsedUsers.find(
        (user) =>
          user.email === userInfo.email && user.password === userInfo.password
      );
      if (foundUser) {
        setUserInfo(foundUser);
        setErrors("");
        setLoggedIn(true);
        setOpenLogin(false);
      } else {
        setErrors("User not found");
      }
    } else {
      setErrors("No registered users. Create a new account and try again.");
    }
  };

  return (
    <main
      className={`fixed z-[100] top-[60px] left-0 right-0 flex items-center justify-center backdrop-blur-md`}
    >
      <div className="text-center max-w-[400px] p-8 rounded-lg bg-[#000020c9] w-full h-screen md:backdrop-blur-lg shadow-lg flex items-center flex-col overflow-y-auto relative">
        <BiX
          onClick={() => setOpenLogin(false)}
          className="text-4xl hover:opacity-80 absolute top-1 right-1 cursor-pointer"
        />
        <Title first="Login" second="Here!" />

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <div className="flex flex-col gap-4 items-center justify-center">
            <label htmlFor="email" className="sr-only">
              Email Address
            </label>
            <input
              required
              id="email"
              type="email"
              aria-label="Email Address"
              className="bg-white/70 p-4 w-full rounded-md border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#87b2f1] transition duration-300 ease-in-out text-black"
              placeholder="Email"
              onChange={(event) =>
                setUserInfo({ ...userInfo, email: event.target.value })
              }
            />
            <label htmlFor="email" className="sr-only">
              Password
            </label>
            <input
              required
              id="password"
              maxLength="15"
              type="password"
              aria-label="Password"
              placeholder="Password"
              className="bg-white/70 p-4 w-full rounded-md border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#87b2f1] transition duration-300 ease-in-out text-black"
              onChange={(event) =>
                setUserInfo({ ...userInfo, password: event.target.value })
              }
            />
          </div>

          <div className="flex flex-wrap gap-2 items-center justify-center">
            <p
              onClick={handleOpenForgotPassword}
              className="hover:text-[blue] cursor-pointer"
            >
              Forgot password?
            </p>

            <p
              onClick={handleOpenRegister} // Call the passed function
              className="cursor-pointer hover:text-[blue]"
            >
              Don’t have an account.
            </p>
          </div>

          {errors && (
            <div className="bg-red-100 text-red-600 p-2 rounded-md">
              {errors}
            </div>
          )}

          <button
            type="submit"
            className="text-[#87b2f1] bg-[#000020] hover:bg-[#0a0a13] active:bg-[#0a0a13] border-2 border-transparent rounded p-3 px-8 md:text-lg md:font-bold w-full"
          >
            Login
          </button>
        </form>
      </div>
    </main>
  );
}
