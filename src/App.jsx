import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Book from "./components/Book";
import Destinations from "./components/Destinations";
import Packages from "./components/Packages";
import WhyUs from "./components/WhyUs";
import Popular from "./components/Popular";
import Types from "./components/Types";
import Guides from "./components/Guides";
import Footer from "./components/Footer";
import ContactUs from "./components/Contact-Us";
import AboutUs from "./components/AboutUs";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassowrd from "./pages/Forgot-Password";
import UserInformation from "./pages/User-Information";

const App = () => {
  // localStorage.clear()
  const [openMenu, setOpenMenu] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);
  const [openUserInfo, setOpenUserInfo] = useState(false);
  const [openRegister, setOpenRegister] = useState(false);
  const [openForgotPassword, setOpenForgotPassword] = useState(false);

  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    password: "",
    phoneNumber: "",
  });

  const [errors, setErrors] = useState("");

  const handleOpenLogin = (event) => {
    event.preventDefault();
    setOpenLogin(true);
    setOpenRegister(false);
    setOpenForgotPassword(false);
    setErrors("")
  };

  const handleOpenRegister = () => {
    setOpenLogin(false);
    setOpenRegister(true);
    setOpenForgotPassword(false);
    setErrors("");
  };

  const handleOpenForgotPassword = () => {
    setOpenLogin(false);
    setOpenRegister(false);
    setOpenForgotPassword(true);
    setErrors("");
  };

  const handleOpenMenu = () => {
    setOpenMenu(!openMenu);
    setOpenLogin(false);
    setOpenRegister(false);
    setOpenForgotPassword(false);
    setOpenUserInfo(false);
  };
  // Prevent body from scrolling when models are opened
  useEffect(() => {
    if (
      openLogin ||
      openRegister ||
      openForgotPassword ||
      openUserInfo ||
      openMenu
    ) {
      document.body.style.overflow = "hidden"; // Disable scrolling
    } else {
      document.body.style.overflow = "auto"; // Re-enable scrolling
    }
    // Clean up: Ensure scroll is re-enabled if component unmounts or models closes
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [openForgotPassword, openLogin, openMenu, openRegister, openUserInfo]);

  return (
    <div
      onClick={() => openMenu && setOpenMenu(false)}
      className="bg-[#01012c] text-white overflow-x-hidden"
    >
      <Header
        setOpenUserInfo={setOpenUserInfo}
        openMenu={openMenu}
        setOpenMenu={setOpenMenu}
        handleOpenMenu={handleOpenMenu}
        loggedIn={loggedIn}
        handleOpenLogin={handleOpenLogin}
      />
      <Hero />
      <AboutUs />
      <Book loggedIn={loggedIn} handleOpenLogin={handleOpenLogin} />
      <Destinations />
      <Packages />
      <WhyUs />
      <Popular />
      <Types />
      <Guides />
      <ContactUs
        userInfo={userInfo}
        loggedIn={loggedIn}
        errors={errors}
        setErrors={setErrors}
        handleOpenLogin={handleOpenLogin}
      />
      {openLogin && (
        <Login
          userInfo={userInfo}
          setUserInfo={setUserInfo}
          errors={errors}
          setErrors={setErrors}
          setLoggedIn={setLoggedIn}
          setOpenLogin={setOpenLogin}
          handleOpenRegister={handleOpenRegister}
          handleOpenForgotPassword={handleOpenForgotPassword}
        />
      )}
      {openRegister && (
        <Register
          userInfo={userInfo}
          setUserInfo={setUserInfo}
          errors={errors}
          setLoggedIn={setLoggedIn}
          setErrors={setErrors}
          setOpenRegister={setOpenRegister}
          handleOpenLogin={handleOpenLogin}
        />
      )}
      {openForgotPassword && (
        <ForgotPassowrd
          errors={errors}
          setErrors={setErrors}
          setOpenLogin={setOpenLogin}
          setOpenForgotPassword={setOpenForgotPassword}
          handleOpenLogin={handleOpenLogin}
        />
      )}
      {openUserInfo && (
        <UserInformation
          userInfo={userInfo}
          setLoggedIn={setLoggedIn}
          setOpenUserInfo={setOpenUserInfo}
        />
      )}
      <Footer />
    </div>
  );
};

export default App;
