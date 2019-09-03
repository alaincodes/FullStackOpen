import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Countries from "./components/Countries";

function App() {
  const [countries, setCountries] = useState([]);
  const [countryName, setCountryName] = useState("");

  useEffect(() => {
    axios.get("https://restcountries.eu/rest/v2/all").then(response => {
      setCountries(response.data);
    });
  }, []);

  const filterCountry = countries.filter(country => {
    return country.name.toLowerCase().indexOf(countryName.toLowerCase()) !== -1;
  });

  const handleCountryNameChange = event => {
    setCountryName(event.target.value);
  };

  return (
    <>
      find countries
      <input value={countryName} onChange={handleCountryNameChange} />
      <Countries key={countries.toString()} countries={filterCountry} />
    </>
  );
}

export default App;
