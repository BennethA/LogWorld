import React, { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Book from "./components/Book";
import Destinations from "./components/Destinations";
import Packages from "./components/Packages";
import WhyUs from "./components/WhyUs";
import Popular from "./components/Popular";
import Types from "./components/Types";
import Guides from "./components/Guides";
import Save from "./components/Save";
import Footer from "./components/Footer";
import ContactUs from "./components/Contact-Us";
import AboutUs from "./components/AboutUs";

const App = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleOpenMenu = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <div onClick={() => openMenu && setOpenMenu(false)} className="bg-[#01012c] text-white">
      <Header
        openMenu={openMenu}
        setOpenMenu={setOpenMenu}
        handleOpenMenu={handleOpenMenu}
      />
      <Hero />
      <AboutUs />
      <Book />
      <Destinations />
      <Packages />
      <WhyUs />
      <Popular />
      <Types />
      <Guides />
      <Save />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default App;
