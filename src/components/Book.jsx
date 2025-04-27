import React, { useEffect, useState } from "react";
import { Country, City } from "country-state-city";
import { BiMinus, BiPlus } from "react-icons/bi";
import Title from "./Title";

const CountrySelector = ({
  label,
  selectedCountry,
  setCountry,
  countries,
  error,
}) => (
  <div className="w-full">
    <label htmlFor={label} className="block mb-1 md:text-lg">
      {label}
    </label>
    <select
      className={`p-2 outline-none w-full bg-[#040625] text-white rounded-md border-b-2 ${
        error && "border-red-500"
      }`}
      id={label}
      value={selectedCountry?.name || ""}
      onChange={(e) => setCountry(e.target.value)}
    >
      <option value="" disabled>
        Select Country
      </option>
      {countries.map((country) => (
        <option key={country.isoCode} value={country.name}>
          {country.name}
        </option>
      ))}
    </select>
    {error && <p className="text-red-500 text-sm">{error}</p>}
  </div>
);

const CitySelector = ({ label, selectedCity, setCity, cities, error }) => (
  <div className="w-full">
    <label htmlFor={label} className="block mb-1 md:text-lg">
      {label}
    </label>
    <select
      className={`border-b-2 p-2 outline-none w-full bg-[#040625] text-white rounded-md ${
        error && "border-red-500"
      }`}
      id={label}
      value={selectedCity?.name || ""}
      onChange={(e) => setCity(e.target.value)}
    >
      <option value="" disabled>
        Select City
      </option>
      {cities.map((city) => (
        <option key={city.name + city.stateCode} value={city.name}>
          {city.name}
        </option>
      ))}
    </select>
    {error && <p className="text-red-500 text-sm">{error}</p>}
  </div>
);

const Book = ({ loggedIn, handleOpenLogin, darkMode }) => {
  const [promo, setPromo] = useState(false);
  const [countries, setCountries] = useState([]);
  const [fromCities, setFromCities] = useState([]);
  const [toCities, setToCities] = useState([]);
  const today = new Date().toISOString().split("T")[0];

  const [bookFlight, setBookFlight] = useState({
    type: "Return",
    fromCountry: {},
    fromCity: {},
    toCountry: {},
    toCity: {},
    departure: "",
    arrival: "",
    passengers: 1,
    promoCode: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const updateBookFlight = (field, value) => {
    setBookFlight((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  useEffect(() => {
    setCountries(Country.getAllCountries());
  }, []);

  useEffect(() => {
    if (bookFlight.fromCountry?.isoCode) {
      const cities = City.getCitiesOfCountry(bookFlight.fromCountry.isoCode);
      setFromCities(cities);
      updateBookFlight("fromCity", {});
    }
  }, [bookFlight.fromCountry]);

  useEffect(() => {
    if (bookFlight.toCountry?.isoCode) {
      const cities = City.getCitiesOfCountry(bookFlight.toCountry.isoCode);
      setToCities(cities);
      updateBookFlight("toCity", {});
    }
  }, [bookFlight.toCountry]);

  const validateForm = () => {
    const newErrors = {};
    const {
      fromCountry,
      fromCity,
      toCountry,
      toCity,
      departure,
      arrival,
      type,
      promoCode,
    } = bookFlight;

    // Country checks
    if (!fromCountry.name) newErrors.fromCountry = "Required";
    if (!toCountry.name) newErrors.toCountry = "Required";

    // City checks only if there are cities available
    if (fromCities.length > 0 && !fromCity.name) {
      newErrors.fromCity = "Required";
    }

    if (toCities.length > 0 && !toCity.name) {
      newErrors.toCity = "Required";
    }

    // Prevent selecting the same city if cities are available
    if (
      fromCities.length > 0 &&
      toCities.length > 0 &&
      fromCity.name &&
      toCity.name &&
      fromCity.name === toCity.name
    ) {
      newErrors.toCity = "Cities can't be the same!";
    }

    // Prevent selecting the same country when both have no cities
    if (
      fromCountry.isoCode &&
      toCountry.isoCode &&
      fromCountry.isoCode === toCountry.isoCode &&
      fromCities.length === 0 &&
      toCities.length === 0
    ) {
      newErrors.toCountry =
        "Countries can't be the same if no cities are available!";
    }

    // Date validation
    if (!departure || departure < today)
      newErrors.departure = "Invalid departure date";

    if (type === "Return" && (!arrival || arrival < departure)) {
      newErrors.arrival = "Invalid return date";
    }

    if (promo && !promoCode) newErrors.promoCode = "Enter promo code";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!loggedIn) return handleOpenLogin(e);
    if (!validateForm()) return;

    setLoading(true);

    // Simulate an API call
    try {
      const response = await fetch("https://api.example.com/flights", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bookFlight),
      });

      const data = await response.json();
      console.log("Available flights:", data);
    } catch (err) {
      console.error("Failed to fetch flights:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      id="book"
      className="flex flex-col items-center px-[5%] pt-16 pb-8 gap-5"
    >
      <Title
        darkMode={darkMode}
        first="What's Your"
        second="Destination?"
        description="Experience world-class services and renowned hospitality when you book your trip with our partnered airlines."
      />

      <div className={`w-full rounded flex flex-col`}>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-6">
          <div className="flex gap-7 flex-wrap">
            {["Return", "One Way"].map((type) => (
              <label key={type} className="flex items-center gap-2">
                <input
                  type="radio"
                  id={type}
                  value={type}
                  checked={bookFlight.type === type}
                  onChange={(e) => updateBookFlight("type", e.target.value)}
                />
                {type}
              </label>
            ))}
          </div>

          <CountrySelector
            label="From Country:"
            selectedCountry={bookFlight.fromCountry}
            setCountry={(name) => {
              const found = countries.find((c) => c.name === name);
              updateBookFlight("fromCountry", found);
            }}
            countries={countries}
            error={errors.fromCountry}
          />

          <CitySelector
            label="From City:"
            selectedCity={bookFlight.fromCity}
            setCity={(name) =>
              updateBookFlight("fromCity", {
                name,
                iataCode: bookFlight.fromCountry.isoCode,
              })
            }
            cities={fromCities}
            error={errors.fromCity}
          />

          <CountrySelector
            label="To Country:"
            selectedCountry={bookFlight.toCountry}
            setCountry={(name) => {
              const found = countries.find((c) => c.name === name);
              updateBookFlight("toCountry", found);
            }}
            countries={countries}
            error={errors.toCountry}
          />

          <CitySelector
            label="To City:"
            selectedCity={bookFlight.toCity}
            setCity={(name) =>
              updateBookFlight("toCity", {
                name,
                iataCode: bookFlight.toCountry.isoCode,
              })
            }
            cities={toCities}
            error={errors.toCity}
          />

          <div className="w-full">
            <label htmlFor="Departure" className="block mb-1 md:text-lg">
              Departure:
            </label>
            <input
              id="Departure"
              type="date"
              min={today}
              value={bookFlight.departure}
              onChange={(e) => updateBookFlight("departure", e.target.value)}
              className={`bg-[#040625] text-white border-b-2 p-2 outline-none w-full rounded-md ${
                errors.departure && "border-red-500"
              }`}
            />
            {errors.departure && (
              <p className="text-red-500 text-sm">{errors.departure}</p>
            )}
          </div>

          {bookFlight.type === "Return" && (
            <div className="w-full">
              <label htmlFor="Arrival" className="block mb-1 md:text-lg">
                Arrival:
              </label>
              <input
                id="Arrival"
                type="date"
                min={bookFlight.departure}
                value={bookFlight.arrival}
                onChange={(e) => updateBookFlight("arrival", e.target.value)}
                className={`bg-[#040625] text-white border-b-2 p-2 outline-none w-full rounded-md ${
                  errors.arrival && "border-red-500"
                }`}
              />
              {errors.arrival && (
                <p className="text-red-500 text-sm">{errors.arrival}</p>
              )}
            </div>
          )}

          {promo && (
            <div className="w-full">
              <label htmlFor="Promo" className="block mb-1 md:text-lg">
                Promo Code:
              </label>
              <input
                id="Promo"
                type="text"
                value={bookFlight.promoCode}
                onChange={(e) =>
                  updateBookFlight("promoCode", e.target.value.toUpperCase())
                }
                className={`bg-transparent border-b-2 p-2 outline-none w-full ${
                  errors.promoCode && "border-red-500"
                }`}
              />
              {errors.promoCode && (
                <p className="text-red-500 text-sm">{errors.promoCode}</p>
              )}
            </div>
          )}

          <div className="w-full flex items-center gap-4 flex-wrap">
            <span className="block mb-1 md:text-lg">Passengers:</span>
            <div className="flex items-center gap-3 flex-wrap justify-center">
              <button
                type="button"
                aria-label="Decrease passenger count"
                className="bg-gray-500 text-white px-3 rounded text-xl p-1 hover:bg-gray-600 active:bg-gray-600"
                onClick={() =>
                  updateBookFlight(
                    "passengers",
                    Math.max(1, bookFlight.passengers - 1)
                  )
                }
              >
                <BiMinus />
              </button>
              <span>{bookFlight.passengers}</span>
              <button
                type="button"
                aria-label="Increase passenger count"
                className="bg-gray-500 text-white px-3 rounded text-xl p-1 hover:bg-gray-600 active:bg-gray-600"
                onClick={() =>
                  updateBookFlight("passengers", bookFlight.passengers + 1)
                }
              >
                <BiPlus />
              </button>
            </div>
          </div>

          <div className="flex gap-2 justify-evenly mt-4 flex-wrap">
            <button
              type="button"
              onClick={() => {
                setPromo((p) => !p);
                if (promo) updateBookFlight("promoCode", "");
              }}
              className="text-[#87b2f1] border-2 border-[#87b2f1] rounded p-3 px-8 font-bold flex items-center justify-center gap-1"
            >
              {promo ? <BiMinus /> : <BiPlus />}
              {promo ? "Remove Promo Code" : "Add Promo Code"}
            </button>

            <button
              type="submit"
              disabled={loading}
              className="text-white bg-gradient-to-r from-[#0d0d77] to-[#4d034d] hover:from-[#2727bd] hover:to-[#910f91] rounded p-3 px-8 font-bold"
            >
              {loading ? "Searching..." : "Search Flights"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Book;
