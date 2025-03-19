import React, { useEffect, useState } from "react";
import { CiLocationOff, CiPlane } from "react-icons/ci";
import { Country, City } from "country-state-city";
import Title from "./Title";

const Book = () => {
  const handleKeyDown = (e) => {
    e.preventDefault();
  };

  const [countries, setCountries] = useState([]);
  const [fromCities, setFromCities] = useState([]);
  const [toCities, setToCities] = useState([]);

  useEffect(() => {
    const allCountries = Country.getAllCountries();
    setCountries(allCountries);
  }, []);

  const [errors, setErrors] = useState("");
  const [bookType, setBookType] = useState("Book A Flight");

  const options = [
    { name: "Book A Flight", icon: <CiLocationOff /> },
    { name: "Book A Layover", icon: <CiPlane /> },
  ];

  const [bookFlight, setBookFlight] = useState({
    type: "Return",
    fromCountry: "",
    fromCity: "",
    toCountry: "",
    toCity: "",
    departure: "",
    return: "",
    passengers: 1,
  });

  const flightType = [{ name: "Return" }, { name: "One Way" }];

  const handleFlightTypeChange = (event) => {
    setBookFlight({ ...bookFlight, type: event.target.value });
  };

  {
    /* Checks for the current date and splits the date and time into two array values */
  }
  const today = new Date().toISOString().split("T")[0];

  const flightInfo = [
    {
      type: "date",
      name: "Departure",
      min: today,
      max: bookFlight.return,
      value: bookFlight.departure,
      change: (e) =>
        setBookFlight({ ...bookFlight, departure: e.target.value }),
    },
  ];

  const submitFlightInfo = (e) => {
    e.preventDefault();
    if (bookFlight.type === "") {
      setErrors("Please select a booking type.");
      return;
    } else if (bookFlight.type === "One Way") {
      setBookFlight({ ...bookFlight, return: "" });
    } else if (bookFlight.fromCity === bookFlight.toCity) {
      setErrors("Departure and destination cities cannot be the same.");
      return;
    }

    setErrors("");
    console.log(bookFlight);
  };

  const handleFromCountry = (event) => {
    const country = countries.find(
      (country) => country.name === event.target.value
    );
    setBookFlight({ ...bookFlight, fromCountry: country });
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
    setBookFlight({ ...bookFlight, fromCity: event.target.value });
  };

  const handleToCountry = (event) => {
    const country = countries.find(
      (country) => country.name === event.target.value
    );
    setBookFlight({ ...bookFlight, toCountry: country });
  };

  const handleToCity = (event) => {
    setBookFlight({ ...bookFlight, toCity: event.target.value });
  };

  return (
    <div
      id="book"
      className="flex items-center justify-center px-[5%] md:px-[7%] lg:px-[10%]  pb-8 flex-col gap-5 pt-16"
    >
      <Title
        first="What's Your"
        second="Destination?"
        description="Experience world-class services and renowned hospitality when you book your trip with our partnered airlines. The award-winning airlines offer a journey of luxury, comfort, and exceptional care!"
      />
      <div className="bg-slate-950 w-full mb-3 rounded overflow-hidden">
        <div className="flex justify-between">
          {options.map((option) => (
            <button
              key={option.name}
              onClick={() => setBookType(option.name)}
              className={`w-full hover:opacity-80 active:opacity-80 p-3 cursor-pointer md:text-lg font-bold ${
                bookType === option.name
                  ? "text-[#87b2f1] bg-black"
                  : "text-white bg-slate-800"
              }`}
            >
              {option.name}
            </button>
          ))}
        </div>
        <div className="text-white">
          {bookType === "Book A Flight" ? (
            <form
              onSubmit={submitFlightInfo}
              className="text-white flex gap-4 flex-col p-6"
            >
              <div className="flex gap-7 sm:flex-row flex-col">
                {flightType.map((flight, index) => (
                  <div key={index} className="flex gap-2 items-center">
                    <input
                      type="radio"
                      value={flight.name}
                      checked={bookFlight.type === flight.name}
                      onChange={handleFlightTypeChange}
                    />
                    <p className="md:text-lg">{flight.name}</p>
                  </div>
                ))}
              </div>
              <div className="bg-[#01012c] p-4 border-2 border-gray-400 rounded flex items-center gap-7 gap-y-3 flex-wrap w-full">
                <div className="flex flex-wrap gap-3 items-center justify-between w-full max-w-[400px]">
                  <p className="w-[30%] md:text-lg">From:</p>
                  <div className="flex flex-wrap gap-4 w-full">
                    <select
                      className="bg-transparent border-b px-1 outline-none w-full"
                      value={bookFlight.fromCountry.name}
                      onChange={handleFromCountry}
                    >
                      {countries.map((country) => (
                        <option
                          required
                          value={country.name}
                          key={country.name + country.stateCode}
                          className="bg-[#01012c]"
                        >
                          {country.name}
                        </option>
                      ))}
                    </select>
                    <select
                      className="bg-transparent border-b px-1 outline-none w-full"
                      value={bookFlight.fromCity}
                      onChange={handleFromCity}
                    >
                      {fromCities.map((city) => (
                        <option
                          required
                          value={city.name}
                          key={city.name + city.stateCode}
                          className="bg-[#01012c]"
                        >
                          {city.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="flex flex-wrap gap-3 items-center justify-between w-full max-w-[400px]">
                  <p className="w-[30%] md:text-lg">To:</p>
                  <div className="flex flex-wrap gap-4 w-full">
                    <select
                      className="bg-transparent border-b px-1 outline-none w-full"
                      value={bookFlight.toCountry.name}
                      onChange={handleToCountry}
                    >
                      {countries.map((country) => (
                        <option
                          required
                          value={country.name}
                          key={country.name + country.stateCode}
                          className="bg-[#01012c]"
                        >
                          {country.name}
                        </option>
                      ))}
                    </select>
                    <select
                      className="bg-transparent border-b px-1 outline-none w-full"
                      value={bookFlight.toCity}
                      onChange={handleToCity}
                    >
                      {toCities.map((city) => (
                        <option
                          required
                          value={city.name}
                          key={city.name + city.stateCode}
                          className="bg-[#01012c]"
                        >
                          {city.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                {flightInfo.map((flight, index) => (
                  <div
                    key={index}
                    className="flex gap-3 flex-wrap items-center justify-between w-full max-w-[400px]"
                  >
                    <p className="w-[30%] md:text-lg">{flight.name}:</p>
                    <input
                      required
                      onKeyDown={handleKeyDown}
                      min={flight.min}
                      max={flight.max}
                      type={flight.type}
                      value={flight.value}
                      onChange={flight.change}
                      className="bg-transparent border-b px-1 outline-none w-full"
                    />
                  </div>
                ))}
                {bookFlight.type === "Return" && (
                  <div className="flex gap-3 flex-wrap items-center justify-between w-full max-w-[400px]">
                    <p className="w-[30%] md:text-lg">Return:</p>
                    <input
                      required
                      onKeyDown={handleKeyDown}
                      type="date"
                      value={bookFlight.return}
                      onChange={(e) =>
                        setBookFlight({ ...bookFlight, return: e.target.value })
                      }
                      className="bg-transparent border-b px-1 outline-none w-full"
                      min={bookFlight.departure}
                    />
                  </div>
                )}
                <div className="flex flex-wrap gap-3 items-center justify-between w-full max-w-[400px]">
                  <p className="w-[30%] md:text-lg">Passenger/s:</p>
                  <input
                    required
                    type="number"
                    value={bookFlight.passengers}
                    onChange={(e) =>
                      setBookFlight({
                        ...bookFlight,
                        passengers: e.target.value,
                      })
                    }
                    className="bg-transparent border-b px-1 outline-none w-full max-w-[170px] appearance-none"
                  />
                </div>
              </div>
              {errors && (
                <div className="text-red-500 md:text-lg">{errors}</div>
              )}
              <div className="flex justify-end">
                <button className="text-[#87b2f1] bg-[#01012c] hover:bg-[#0a0a13] active:bg-[#0a0a13] hover:border-2 border-2 border-transparent rounded p-3 px-8 md:text-lg md:font-bold">
                  Search Flights
                </button>
              </div>
            </form>
          ) : (
            <div className="text-white flex gap-3 flex-col p-6 md:text-lg">
              Book a layover
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Book;
