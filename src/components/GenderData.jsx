import React, { useState, useEffect } from "react";
import { fetchQuery } from "../api/rickandmorty";
// assets
import Female from "../assets/female.svg";
import Male from "../assets/male.svg";
import Unknown from "../assets/unknown.svg";
import Genderless from "../assets/genderless.svg";

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

  useEffect(() => {
    fetchQuery(genderUrls["female"], setFemaleGender);
    fetchQuery(genderUrls["male"], setMaleGender);
    fetchQuery(genderUrls["unknown"], setUnknownGender);
    fetchQuery(genderUrls["genderless"], setGenderlessGender);
  }, []);

  return (
    <div className="gender-container">
      <h3>Characters by gender</h3>
      <div className="gender">
        <img src={Male} alt="male icon" />
        <p>Male</p>
        <p>{maleGender.count}</p>
      </div>
      <div className="gender">
        <img src={Female} alt="female icon" />
        <p>Female</p>
        <p>{femaleGender.count}</p>
      </div>
      <div className="gender">
        <img src={Unknown} alt="unknown icon" />
        <p>Unknown</p>
        <p>{unknownGender.count}</p>
      </div>
      <div className="gender">
        <img src={Genderless} alt="unknown icon" />
        <p>Genderless</p>
        <p>{genderlessGender.count}</p>
      </div>
    </div>
  );
}
