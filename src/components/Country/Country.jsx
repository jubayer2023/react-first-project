import { useState } from "react";
import "./Country.css";
const Country = ({ country, handleVisitedCountry }) => {
  // console.log(country);
  const { name, flags, population, area, cca2 } = country;
  //   console.log(name);
  const [visited, setVisited] = useState(false);

  const handleVisitBtn = () => {
    setVisited(!visited);
  };
  return (
    <div className={`country ${visited ? 'visited': 'non-visited'}`}>
      <h3>Name: {name.common} </h3>
      <img className="flag-size" src={flags.png} alt="" />
      <p>Population: {population}</p>
      <p>Area: {area}</p>
      <p>
        <small>Code: {cca2}</small>
      </p>
      <button onClick={handleVisitBtn}>{visited ? 'Visisted':'Going'}</button>
      <button onClick={() => handleVisitedCountry(country)}>Add-Country</button>
      <p>
        <small>
          {visited ? 'I have visited this country before!' : 'I want to visit'}
        </small>
      </p>
    </div>
  );
};

export default Country;
