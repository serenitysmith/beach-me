import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../context/dataContext";
import { UserContext } from "../context/userContext";

function StateVerification() {
  const navigate = useNavigate();
  const { setVerification, verification } = useContext(DataContext);
  const { token } = useContext(UserContext);

  const [county, setCounty] = useState({
    city: "",
    county: "",
    years: "",
  });

  function tokenVerification() {
    if (token) {
      console.log("checked for token");
      setVerification(true);
      navigate("/");
    }
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setCounty((prevCounty) => {
      return {
        ...prevCounty,
        [name]: value,
      };
    });
  }

  const maxYear = new Date().getFullYear();

  useEffect(() => {
    tokenVerification();
    console.log(verification);
  }, [token, verification]);

  function handleSubmit(e) {
    e.preventDefault();
    const currentYear = new Date().getFullYear();
    const yearsInCounty = currentYear - parseInt(county.years);
    const hasLivedInCountyForFiveYears = yearsInCounty >= 5;

    if (!hasLivedInCountyForFiveYears) {
      setVerification(false);
      navigate("/sorry");
    } else {
      setVerification(true);
      navigate("/");
    }
  }

  return (
    <div>
      <h1>Welcome</h1>
      <h3>You must be 21 years old to enter this website.</h3>
      <h3>Please enter your county, city, and the year you moved there:</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="county"
          value={county.county}
          placeholder="County"
          onChange={handleChange}
        ></input>
        <input
          type="text"
          name="city"
          value={county.city}
          placeholder="City"
          onChange={handleChange}
        ></input>
        <input
          type="number"
          name="years"
          value={county.years}
          placeholder="Year"
          max={maxYear}
          onChange={handleChange}
        ></input>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default StateVerification;
