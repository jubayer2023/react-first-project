import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [visitedCountries, setVisitedCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  const handleVisitedCountry = (country) => {
    // console.log(country)
    const newVisitedCountries = [...visitedCountries, country];
    setVisitedCountries(newVisitedCountries);
  };

  return (
    <div>
      <h3>Countries: {countries.length} </h3>

      {/* visited countries*/}
      <div>
        <h3>Visited Countries list: {visitedCountries.length}</h3>
        <ol>
          {visitedCountries.map((visitedCountry) => (
            <li key={visitedCountry.cca2}>{visitedCountry.name.common}</li>
          ))}
        </ol>
      </div>
      {/* display countries */}
      <div className="country-container">
        {countries.map((country) => (
          <Country
            country={country}
            handleVisitedCountry={handleVisitedCountry}
            key={country.cca2}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
