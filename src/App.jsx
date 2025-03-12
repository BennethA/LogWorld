import React from "react";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Book from "./components/Book";
import Destinations from "./components/Destinations";
import Packages from "./components/Packages";
import WhyUs from "./components/WhyUs";
import Popular from "./components/Popular";
import Type from "./components/Type";
import Guidings from "./components/Guidings";
import Save from "./components/Save";
import Footer from "./components/Footer";
import ContactUs from "./components/Contact-Us";

const App = () => {
  return (
    <div className="bg-gray-200">
      <Navigation />
      <Hero />
      <Book />
      <Destinations />
      <Packages />
      <WhyUs />
      <Popular />
      <Type />
      <Guidings />
      <Save/>
      <ContactUs/>
      <Footer/>
    </div>
  );
};

export default App;
