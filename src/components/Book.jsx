import React, { useEffect, useState } from "react";
import { CiLocationOff, CiPlane } from "react-icons/ci";
import { Country, City } from "country-state-city";
import Title from "./Title";
import { BiPlus } from "react-icons/bi";
import { FaMoon, FaSun } from "react-icons/fa";

const Book = ({ loggedIn, handleOpenLogin }) => {
  const [promo, setPromo] = useState(false);

  const handleKeyDown = (event) => {
    event.preventDefault();
  };
  const [countries, setCountries] = useState([]);
  const [fromCities, setFromCities] = useState([]);
  const [toCities, setToCities] = useState([]);

  const [errors, setErrors] = useState("");

  const [bookFlight, setBookFlight] = useState({
    type: "Return",
    fromCountry: "",
    fromCity: "",
    toCountry: "",
    toCity: "",
    departure: "",
    arrival: "",
    passengers: 1,
    promoCode: "",
  });

  const handlePromo = (event) => {
    event.preventDefault();
    if (promo) {
      setPromo(false);
      setBookFlight((prevState) => ({
        ...prevState,
        promoCode: "",
      }));
      return;
    } else {
      setPromo(true);
      setBookFlight((prevState) => ({
        ...prevState,
        promoCode: "",
      }));
      return;
    }
  };

  useEffect(() => {
    const allCountries = Country.getAllCountries();
    setCountries(allCountries);
  }, []);

  const flightType = [{ name: "Return" }, { name: "One Way" }];

  const handleFlightTypeChange = (event) => {
    setBookFlight((prevState) => ({
      ...prevState,
      type: event.target.value, // Clear the return date
    }));
  };

  {
    /* Checks for the current date and splits the date and time into two array values */
  }
  const today = new Date().toISOString().split("T")[0];

  const submitFlightInfo = (e) => {
    e.preventDefault();

    // Check for flight type
    if (!bookFlight.type) {
      setErrors("Please select a flight type!");
      return;
    }

    // Check for 'From' country
    if (!bookFlight.fromCountry) {
      setErrors("Please select the country you want to fly from!");
      return;
    }

    // Check if the 'From' country has cities, and if so, ensure a city is selected
    const fromCountryCities = City.getCitiesOfCountry(
      bookFlight.fromCountry.isoCode
    ).length;
    if (fromCountryCities > 0 && !bookFlight.fromCity) {
      setErrors("Please select the city you want to fly from!");
      return;
    }

    // Check for 'To' country
    if (!bookFlight.toCountry) {
      setErrors("Please select the country you want to fly to!");
      return;
    }

    // Check if the 'To' country has cities, and if so, ensure a city is selected
    const toCountryCities = City.getCitiesOfCountry(
      bookFlight.toCountry.isoCode
    ).length;
    if (toCountryCities > 0 && !bookFlight.toCity) {
      setErrors("Please select the city you want to fly to!");
      return;
    }

    // Condition: If 'From' country has no cities, user cannot select the same country as 'To' country
    if (
      fromCountryCities === 0 &&
      bookFlight.fromCountry.name === bookFlight.toCountry.name
    ) {
      setErrors(
        "You cannot select the same country with no cities as both 'From' and 'To' country!"
      );
      return;
    }

    // Check for 'From' and 'To' countries having no cities
    if (fromCountryCities === 0 && toCountryCities === 0) {
      setErrors(""); // Clear errors and proceed
      console.log(bookFlight);
      return;
    }

    // Ensure 'From' and 'To' cities are not the same
    if (bookFlight.fromCity === bookFlight.toCity) {
      setErrors("Departure and destination cities cannot be the same!");
      return;
    }

    // Check if 'Departure' date is selected and valid
    if (!bookFlight.departure || bookFlight.departure < today) {
      setErrors("Please select a valid departure date!");
      return;
    }

    // If flight type is 'One Way', remove the 'return' value
    if (bookFlight.type === "One Way") {
      setBookFlight((prevState) => ({
        ...prevState,
        arrival: "", // Clear the return date
      }));
    }

    // If "Promo is true", display the Promo section. If not remove it and the value is empty
    if (promo && bookFlight.promoCode === "") {
      setErrors("Promo Code cannot be empty!");
      return;
    }

    // Check if 'Arrival' date is selected and valid (only for 'Arrival' flight)
    if (
      bookFlight.type === "Return" &&
      (!bookFlight.arrival || bookFlight.arrival < bookFlight.departure)
    ) {
      setErrors("Please select a valid return date!");
      return;
    }

    setErrors("");
    setBookFlight({
      type: "Return",
      fromCountry: "",
      fromCity: "",
      toCountry: "",
      toCity: "",
      departure: "",
      arrival: "",
      passengers: 1,
      promoCode: "",
    });
  };

  const handleFromCountry = (event) => {
    const country = countries.find(
      (country) => country.name === event.target.value
    );
    setBookFlight((prevState) => ({
      ...prevState,
      fromCountry: country, // Clear the return date
    }));
  };

  useEffect(() => {
    if (bookFlight.fromCountry) {
      setFromCities(City.getCitiesOfCountry(bookFlight.fromCountry.isoCode));
    }
  }, [bookFlight.fromCountry]);

  useEffect(() => {
    if (bookFlight.toCountry) {
      setToCities(City.getCitiesOfCountry(bookFlight.toCountry.isoCode));
    }
  }, [bookFlight.toCountry]);

  const handleFromCity = (event) => {
    setBookFlight((prevState) => ({
      ...prevState,
      fromCity: event.target.value, // Clear the return date
    }));
  };

  const handleToCountry = (event) => {
    const country = countries.find(
      (country) => country.name === event.target.value
    );
    setBookFlight((prevState) => ({
      ...prevState,
      toCountry: country, // Clear the return date
    }));
  };

  const handleToCity = (event) => {
    setBookFlight((prevState) => ({
      ...prevState,
      toCity: event.target.value, // Clear the return date
    }));
  };

  const [darkMode, setDarkMode] = useState(true);

  return (
    <div
      id="book"
      className="flex items-center justify-center px-[5%] md:px-[7%] lg:px-[10%] pb-8 flex-col gap-5 pt-16"
    >
      <Title
        first="What's Your"
        second="Destination?"
        description="Experience world-class services and renowned hospitality when you book your trip with our partnered airlines. The award-winning airlines offer a journey of luxury, comfort, and exceptional care!"
      />
      <div
        className={`${
          darkMode ? "bg-[#040625] text-white" : "bg-gray-100"
        } text-black w-full mb-3 rounded overflow-hidden`}
      >
        <div
          className={`w-full p-3 text-lg font-bold border-b relative text-center`}
        >
          Book A Flight
          <div
            onClick={() => setDarkMode(!darkMode)}
            className="flex items-center justify-center absolute right-[23px] top-[17px] cursor-pointer hover:opacity-80 active:opacity-80 "
          >
            {darkMode ? (
              <FaSun className="text-white" />
            ) : (
              <FaMoon className="text-[#040625]" />
            )}
          </div>
        </div>
        <form
          onSubmit={loggedIn ? submitFlightInfo : handleOpenLogin}
          className="flex gap-4 flex-col p-6"
        >
          <div className="flex gap-7 flex-wrap">
            {flightType.map((flight, index) => (
              <div key={index} className="flex gap-2 items-center">
                <input
                  type="radio"
                  value={flight.name}
                  aria-label={`Flight type ${flight.name}`}
                  checked={bookFlight.type === flight.name}
                  onChange={handleFlightTypeChange}
                />
                <label htmlFor={flight.name} className="md:text-lg">
                  {flight.name}
                </label>
              </div>
            ))}
          </div>
          <div className="py-4 flex items-center gap-7 gap-y-3 flex-wrap w-full">
            <div className="flex flex-wrap gap-3 items-center justify-between w-full max-w-[400px]">
              <label
                htmlFor="fromCountryAndCity"
                className="w-[30%] md:text-lg"
              >
                From:
              </label>
              <div className="flex flex-wrap gap-4 w-full">
                <select
                  id="fromCountry"
                  aria-label="Select departure country"
                  className="bg-transparent border-b p-2 outline-none w-full"
                  value={bookFlight.fromCountry.name}
                  onChange={handleFromCountry}
                >
                  <option value="" disabled>
                    Select Country
                  </option>
                  {countries.map((country) => (
                    <option
                      required
                      value={country.name}
                      key={country.name + country.stateCode}
                      className="bg-[#01012c] text-white"
                    >
                      {country.name}
                    </option>
                  ))}
                </select>
                <select
                  id="fromCity"
                  className="bg-transparent border-b p-2 outline-none w-full"
                  value={bookFlight.fromCity}
                  onChange={handleFromCity}
                >
                  {fromCities.map((city) => (
                    <option
                      value={city.name}
                      key={city.name + city.stateCode}
                      className="bg-[#01012c] text-white"
                    >
                      {city.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="flex flex-wrap gap-3 items-center justify-between w-full max-w-[400px]">
              <label htmlFor="toCountryAndCity" className="w-[30%] md:text-lg">
                To:
              </label>
              <div className="flex flex-wrap gap-4 w-full">
                <select
                  id="toCountry"
                  aria-label="Select arrival country"
                  className="bg-transparent border-b p-2 outline-none w-full"
                  value={bookFlight.toCountry.name}
                  onChange={handleToCountry}
                >
                  <option value="" disabled>
                    Select Country
                  </option>
                  {countries.map((country) => (
                    <option
                      required
                      value={country.name}
                      key={country.name + country.stateCode}
                      className="bg-[#01012c] text-white"
                    >
                      {country.name}
                    </option>
                  ))}
                </select>
                <select
                  id="toCity"
                  aria-label="Select arrival city"
                  className="bg-transparent border-b p-2 outline-none w-full"
                  value={bookFlight.toCity}
                  onChange={handleToCity}
                >
                  {toCities.map((city) => (
                    <option
                      value={city.name}
                      key={city.name + city.stateCode}
                      className="bg-[#01012c] text-white"
                    >
                      {city.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="flex gap-3 flex-wrap items-center justify-between w-full max-w-[400px]">
              <label htmlFor="departure" className="w-[30%] md:text-lg">
                Departure:
              </label>
              <input
                required
                id="departure"
                aria-label="departure"
                onKeyDown={handleKeyDown}
                min={today}
                max={bookFlight.arrival}
                type="date"
                value={bookFlight.departure}
                onChange={(event) =>
                  setBookFlight((prevState) => ({
                    ...prevState,
                    departure: event.target.value, // Clear the return date
                  }))
                }
                className="bg-transparent border-b p-2 outline-none w-full"
              />
            </div>
            {bookFlight.type === "Return" && (
              <div className="flex gap-3 flex-wrap items-center justify-between w-full max-w-[400px]">
                <label htmlFor="arrival" className="w-[30%] md:text-lg">
                  Arrival:
                </label>
                <input
                  required
                  id="arrival"
                  aria-label="arrival"
                  onKeyDown={handleKeyDown}
                  type="date"
                  value={bookFlight.arrival}
                  onChange={(event) =>
                    setBookFlight((prevState) => ({
                      ...prevState,
                      arrival: event.target.value,
                    }))
                  }
                  className="bg-transparent border-b p-2 outline-none w-full"
                  min={bookFlight.departure}
                />
              </div>
            )}
            {promo && (
              <div className="flex gap-3 flex-wrap items-center justify-between w-full max-w-[400px]">
                <label htmlFor="promoCode" className="w-[30%] md:text-lg">
                  Promo Code:
                </label>
                <input
                  required
                  id="promoCode"
                  aria-label="promoCode"
                  type="text"
                  value={bookFlight.promoCode}
                  onChange={(event) =>
                    setBookFlight((prevState) => ({
                      ...prevState,
                      promoCode: event.target.value.toUpperCase(),
                    }))
                  }
                  className={`bg-transparent border-b px-1 outline-none w-full`}
                />
              </div>
            )}
            <div className="flex flex-wrap gap-3 items-center justify-between w-full max-w-[400px]">
              <label htmlFor="passengers" className="w-[30%] md:text-lg">
                Passenger/s:
              </label>
              <input
                required
                id="passengers"
                aria-label="passengers"
                type="number"
                inputmode="numeric"
                value={bookFlight.passengers}
                onChange={(event) =>
                  setBookFlight((prevState) => ({
                    ...prevState,
                    passengers: event.target.value,
                  }))
                }
                className="bg-transparent border-b p-2 outline-none w-full"
              />
            </div>
          </div>
          {errors && (
            <div className="bg-red-100 text-red-600 p-2 rounded-md">
              {errors}
            </div>
          )}
          <div className="flex justify-evenly gap-2">
            <button
              onClick={(event) => handlePromo(event)}
              className="text-[#87b2f1] hover:bg-[#01012c] active:bg-[#01012c] border-2 border-[#87b2f1] rounded p-3 px-8 md:text-lg md:font-bold flex items-center gap-2 w-full"
            >
              <BiPlus /> Add Promo Code
            </button>
            <button
              className={`text-white bg-gradient-to-r from-[#0d0d77] to-[#4d034d] hover:from-[#2727bd] hover:to-[#910f91] active:from-[#2727bd] active:to-[#910f91] rounded p-3 px-8 md:text-lg md:font-bold w-full`}
            >
              Search Flights
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Book;
