import React from "react";
import Weather from "./Weather";

const Countries = ({ countries }) => {
  if (countries.length > 10) {
    return <p>Too many matches, specify another filter</p>;
  }
  return (
    <>
      {countries.map(country => (
        <div key={country.numericCode}>
          <h2>
            {country.name} <button>show</button>
          </h2>
          <p>capital {country.capital}</p>
          <p>population {country.population}</p>
          <h3>languages</h3>
          <ul>
            {country.languages.map((lang, index) => (
              <li key={index}>{lang.name}</li>
            ))}
          </ul>
          <img width="200" src={country.flag} alt="" />
          <Weather city={country.capital} />
        </div>
      ))}
    </>
  );
};

export default Countries;
