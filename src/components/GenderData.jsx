import React, { useState, useEffect } from "react";
import { fetchQuery } from "../api/rickandmorty";
// assets
import Female from "../assets/female.svg";
import Male from "../assets/male.svg";
import Unknown from "../assets/unknown.svg";
import Genderless from "../assets/genderless.svg";
import Snackbar from "./Snackbar";
const url = "https://rickandmortyapi.com/api/character/?gender=";

const genderUrls = {
  female: `${url}female`,
  male: `${url}male`,
  unknown: `${url}unknown`,
  genderless: `${url}genderless`,
};

export default function GenderData() {
  const [femaleGender, setFemaleGender] = useState([]);
  const [maleGender, setMaleGender] = useState([]);
  const [unknownGender, setUnknownGender] = useState([]);
  const [genderlessGender, setGenderlessGender] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetchQuery(genderUrls["female"], setFemaleGender, setError);
    fetchQuery(genderUrls["male"], setMaleGender, setError);
    fetchQuery(genderUrls["unknown"], setUnknownGender, setError);
    fetchQuery(genderUrls["genderless"], setGenderlessGender, setError);
  }, []);

  return (
    <div className="gender-container">
      <h3>Characters by gender</h3>
      <div className="gender">
        <img src={Male} alt="male icon" />
        <p>Male</p>
        <strong>{maleGender.count}</strong>
      </div>
      <div className="gender">
        <img src={Female} alt="female icon" />
        <p>Female</p>
        <strong>{femaleGender.count}</strong>
      </div>
      <div className="gender">
        <img src={Unknown} alt="unknown icon" />
        <p>Unknown</p>
        <strong>{unknownGender.count}</strong>
      </div>
      <div className="gender">
        <img src={Genderless} alt="genderless icon" />
        <p>Genderless</p>
        <strong>{genderlessGender.count}</strong>
      </div>
      {error && <Snackbar message={'An error occurred with a request, please try again later 😥'}/>}
    </div>
  );
}
