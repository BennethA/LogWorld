/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { CiLocationOff, CiPlane } from "react-icons/ci";
// import { CountryStateCity } from "country-state-city";
import { Country, City } from "country-state-city";
import Title from "./Title";

const Book = () => {
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

  const flightType = [
    {
      name: "Return",
    },
    {
      name: "One Way",
    },
  ];

  const handleFlightTypeChange = (event) => {
    setBookFlight({ ...bookFlight, type: event.target.value });
  };

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
      setErrors("Select Booking Type!");
      return;
    } else if (bookFlight.type === "One Way") {
      setBookFlight({ ...bookFlight, return: "" });
    } else if (bookFlight.fromCity === bookFlight.toCity) {
      setErrors("Can't Select Same Cities!");
      return;
    }

    setErrors("");
    console.log(bookFlight);
  };

  const handleFromCountry = (event) => {
    const country = countries.find(
      (country) => country.name === event.target.value
    );
    setBookFlight({
      ...bookFlight,
      fromCountry: country,
    });
  };

  useEffect(() => {
    setFromCities(City.getCitiesOfCountry(bookFlight.fromCountry.isoCode));
  }, [bookFlight.fromCountry]);

  useEffect(() => {
    setToCities(City.getCitiesOfCountry(bookFlight.toCountry.isoCode));
  }, [bookFlight.toCountry]);

  const handleFromCity = (event) => {
    setBookFlight({ ...bookFlight, fromCity: event.target.value });
  };

  const handleToCountry = (event) => {
    const country = countries.find(
      (country) => country.name === event.target.value
    );
    setBookFlight({
      ...bookFlight,
      toCountry: country,
    });
  };

  const handleToCity = (event) => {
    setBookFlight({ ...bookFlight, toCity: event.target.value });
  };

  return (
    <div
      id="book"
      className="sm:px-[100px] lg:px-[20%] p-3 flex items-center justify-center flex-col gap-6 pt-[70px] font-bold"
    >
      <div className=" w-[70%] text-center flex flex-col gap-5">
        <Title first="What's Your" second="Destination"/>
        <p className=" text-gray-500 font-semibold leading-4">
          Experience world-class services and renowned hospitality when you book
          your trip to anywhere wuth our Partnered Airway, the award winning
          Airlines offer a journey of luxery comfort and exceptional care!
        </p>
      </div>
      <div className="bg-slate-950 w-full mb-3 rounded overflow-hidden">
        <div className="flex justify-between">
          {options.map((option) => (
            <button
              key={option.name}
              onClick={() => setBookType(option.name)}
              className={`w-full p-2 cursor-pointer  ${
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
              onSubmit={(e) => submitFlightInfo(e)}
              className="text-white flex gap-3 flex-col p-6 "
            >
              <div className="flex gap-7">
                {flightType.map((flight, index) => (
                  <div key={index} className="flex gap-2 items-center">
                    <input
                      type="radio"
                      value={flight.name}
                      checked={bookFlight.type === flight.name}
                      onChange={handleFlightTypeChange}
                    />
                    <p>{flight.name}</p>
                  </div>
                ))}
              </div>
              <div className="bg-gray-700 p-3 border-2 border-gray-400 rounded flex items-center gap-7 gap-y-3 flex-wrap w-full">
                <div className="flex gap-7 items-center justify-between w-full max-w-[400px]">
                  <p>From:</p>
                  <div className="flex flex-wrap gap-2">
                    <select
                      className="bg-transparent border-b px-1 outline-none w-full"
                      value={setBookFlight.fromCountry}
                      onChange={handleFromCountry}
                    >
                      {countries.map((country) => (
                        <option
                          required
                          value={country.name}
                          key={country.name + country.stateCode}
                          className="bg-gray-700"
                        >
                          {country.name}
                        </option>
                      ))}
                    </select>
                    <select
                      className="bg-transparent border-b px-1 outline-none w-full"
                      value={setBookFlight.fromCity}
                      onChange={handleFromCity}
                    >
                      {fromCities.map((city) => (
                        <option
                          required
                          value={city.name}
                          key={city.name + city.stateCode}
                          className="bg-gray-700"
                        >
                          {city.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="flex gap-7 items-center justify-between w-full max-w-[400px]">
                  <p>To:</p>
                  <div className="flex flex-wrap gap-2">
                    <select
                      className="bg-transparent border-b px-1 outline-none w-full"
                      value={setBookFlight.toCountry}
                      onChange={handleToCountry}
                    >
                      {countries.map((country) => (
                        <option
                          required
                          value={country.name}
                          key={country.name + country.stateCode}
                          className="bg-gray-700"
                        >
                          {country.name}
                        </option>
                      ))}
                    </select>
                    <select
                      className="bg-transparent border-b px-1 outline-none w-full"
                      value={setBookFlight.toCity}
                      onChange={handleToCity}
                    >
                      {toCities.map((city) => (
                        <option
                          required
                          value={city.name}
                          key={city.name + city.stateCode}
                          className="bg-gray-700"
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
                    className="flex gap-7 items-center justify-between w-full max-w-[400px]"
                  >
                    <p>{flight.name}:</p>
                    <input
                      required
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
                  <div className="flex gap-7 items-center justify-between w-full max-w-[400px]">
                    <p>Return:</p>
                    <input
                      required
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
                <div className="flex gap-7 items-center justify-between w-full max-w-[400px]">
                  <p>Passenger/s:</p>
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
                    className="bg-transparent border-b px-1 outline-none w-full max-w-[170x]"
                  />
                </div>
              </div>
              {errors && <div className="text-red-500">{errors}</div>}
              <div type="submit" className="flex justify-end">
                <button className="text-[#87b2f1] font-semibold hover:border-[#87b2f1] hover:border-2 border-2 border-transparent rounded p-2 px-5 cursor-pointer">
                  Search Flights
                </button>
              </div>
            </form>
          ) : (
            <div className="text-white flex gap-3 flex-col p-6">
              Book a layover
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Book;
