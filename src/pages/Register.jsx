import React from "react";
import Title from "../components/Title";
import { BiX } from "react-icons/bi";

export default function Register({
  darkMode,
  userInfo,
  setUserInfo,
  errors,
  setLoggedIn,
  setErrors,
  handleOpenLogin,
  setOpenRegister,
}) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const nameRegex = /^[a-zA-Z ]{5,10}$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    // The password should be at least 8 characters long

    const registeredUsers = localStorage.getItem("registeredUsers");

    if (!nameRegex.test(userInfo.name)) {
      setErrors("Invalid name!");
    } else if (!emailRegex.test(userInfo.email)) {
      setErrors("Invalid email!");
    } else if (!passwordRegex.test(userInfo.password)) {
      setErrors(
        "Invalid password(Include capital and small letters, numbers, special characters and must be at least 6 characters long.)!"
      );
    } else {
      if (
        registeredUsers &&
        JSON.parse(registeredUsers)[0].email === userInfo.email &&
        JSON.parse(registeredUsers)[0].password === userInfo.password
      ) {
        setErrors("Already created an account with this email!");
        return;
      } else {
        setErrors("");
        // IF THERE IS NO USER WITH THE USER EMAIL AND PASSWORD, A NEW USER IS REGISTERED
        localStorage.setItem(
          "registeredUsers",
          JSON.stringify([{ ...userInfo }])
        );
        setLoggedIn(true);
        setOpenRegister(false);
        alert("Registration Successfull!");
      }
    }
  };

  const fields = [
    {
      labelName: "Name",
      type: "text",
      minLength: "6",
      maxLength: "15",
      placeholder: "Name",
      value: userInfo.name.slice(0, 1).toUpperCase() + userInfo.name.slice(1),
      onChange: (event) =>
        setUserInfo({ ...userInfo, name: event.target.value }),
    },
    {
      labelName: "Email Address",
      type: "email",
      value: userInfo.email,
      placeholder: "Email",
      onChange: (event) =>
        setUserInfo({ ...userInfo, email: event.target.value }),
    },
    {
      labelName: "Password",
      value: userInfo.password,
      type: "password",
      placeholder: "Password",
      onChange: (event) =>
        setUserInfo({ ...userInfo, password: event.target.value }),
    },
    {
      labelName: "Phone Number",
      type: "number",
      value: userInfo.phoneNumber,
      placeholder: "PhoneNumber",
      onChange: (event) =>
        setUserInfo({ ...userInfo, phoneNumber: event.target.value }),
    },
  ];

  return (
    <main
      className={`fixed z-[100] top-[60px] left-0 right-0 flex items-center justify-center backdrop-blur-md`}
    >
      <div className="text-center max-w-[400px] p-8 rounded-lg w-full h-screen md:backdrop-blur-lg shadow-lg flex items-center flex-col overflow-y-auto sm:w-[500px] relative">
        <BiX
          onClick={() => {
            setErrors("");
            setOpenRegister(false);
          }}
          className="text-4xl hover:opacity-80 absolute top-1 right-1 cursor-pointer"
        />
        <Title darkMode={darkMode} first="Register" second="Here!" />

        <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-full">
          {fields.map((input, index) => {
            return (
              <div key={index}>
                <label htmlFor={input.labelName} className="sr-only">
                  {input.labelName}
                </label>
                <input
                  required
                  type={input.type}
                  value={input.value}
                  aria-label={input.labelName}
                  onChange={input.onChange}
                  placeholder={input.placeholder}
                  minLength={input.minLength}
                  maxLength={input.maxLength}
                  className="bg-white/70 p-4 w-full rounded-md border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#87b2f1] transition duration-300 ease-in-out text-black"
                />
              </div>
            );
          })}

          {errors && (
            <div className="bg-red-100 text-red-600 p-2 rounded-md">
              {errors}
            </div>
          )}

          <p
            onClick={handleOpenLogin} // Call the passed function here
            className="cursor-pointer hover:text-[blue]"
          >
            Already have an account.
          </p>
          <button
            type="submit"
            className="text-[#87b2f1] bg-[#000020] hover:bg-[#0a0a13] active:bg-[#0a0a13] border-2 border-transparent rounded p-3 px-8 md:text-lg md:font-bold w-full"
          >
            Register
          </button>
        </form>
      </div>
    </main>
  );
}
