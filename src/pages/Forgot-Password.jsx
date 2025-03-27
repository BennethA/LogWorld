import React, { useState } from "react";
import Title from "../components/Title";
import { BiX } from "react-icons/bi";

export default function ForgotPassword({
  errors,
  setErrors,
  handleOpenLogin,
  setOpenLogin,
  setOpenForgotPassword,
}) {
  const [formData, setFormData] = useState({
    email: "",
    oldPassword: "",
    newPassword: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleChangePassword = (e) => {
    e.preventDefault();
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    // The password should be at least 8 characters long
    const registeredUsers = localStorage.getItem("registeredUsers");

    if (registeredUsers) {
      const parsedUsers = JSON.parse(registeredUsers);
      const foundUser = parsedUsers.find(
        (user) =>
          user.email === formData.email &&
          user.password === formData.oldPassword
      );

      if (foundUser && passwordRegex.test(formData.newPassword)) {
        foundUser.password = formData.newPassword; // Update the password
        localStorage.setItem("registeredUsers", JSON.stringify(parsedUsers)); // Update localStorage
        setFormData({
          email: "",
          oldPassword: "",
          newPassword: "",
        });
        setErrors("");
        setOpenLogin(true);
      } else if (!passwordRegex.test(formData.newPassword)) {
        setErrors(
          "Invalid password(Include capital and small letters, numbers, special characters and must be at least 6 characters long.)!"
        );
      } else {
        setErrors("User not found!");
      }
    }
  };

  return (
    <main className="fixed z-[100] top-[60px] left-0 right-0 flex items-center justify-center backdrop-blur-md">
      <div className="text-center max-w-[400px] p-8 rounded-lg bg-[#000020c9] w-full h-screen md:backdrop-blur-lg shadow-lg flex items-center flex-col overflow-y-auto sm:w-[500px] relative">
        <BiX
          onClick={() => setOpenForgotPassword(false)}
          className="text-4xl hover:opacity-80 absolute top-1 right-1 cursor-pointer"
        />
        <Title first="Reset" second="Password!" />
        <form
          onSubmit={handleChangePassword}
          className="flex flex-col gap-3 w-full"
        >
          <div className="flex flex-col gap-4 items-center justify-center">
            <label htmlFor="email" className="sr-only">
              Email Address
            </label>
            <input
              required
              id="email"
              type="email"
              aria-label="Email Address"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="johndoe123@gmail.com"
              className="bg-white/70 p-4 w-full rounded-md border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#87b2f1] transition duration-300 ease-in-out text-black"
            />

            <label htmlFor="email" className="sr-only">
              Old Password
            </label>
            <input
              required
              maxLength="15"
              type="password"
              id="oldPassword"
              aria-label="Old Password"
              value={formData.oldPassword}
              onChange={handleInputChange}
              placeholder="Old Password"
              className="bg-white/70 p-4 w-full rounded-md border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#87b2f1] transition duration-300 ease-in-out text-black"
            />

            <label htmlFor="email" className="sr-only">
              New Password
            </label>
            <input
              required
              id="newPassword"
              maxLength="10"
              type="password"
              aria-label="New Password"
              value={formData.newPassword}
              onChange={handleInputChange}
              placeholder="New Password"
              className="bg-white/70 p-4 w-full rounded-md border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#87b2f1] transition duration-300 ease-in-out text-black"
            />
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
            Reset Password
          </button>

          <p
            onClick={handleOpenLogin}
            className="cursor-pointer hover:text-[blue]"
          >
            Go to Login
          </p>
        </form>
      </div>
    </main>
  );
}
