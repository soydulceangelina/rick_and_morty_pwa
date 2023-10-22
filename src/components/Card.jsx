import React, { useState } from "react";
import { formatDate } from "../utils/formatDate";
// components
import Popup from "./Popup";
// assets
import Female from "../assets/female.svg";
import Male from "../assets/male.svg";
import Unknown from "../assets/unknown.svg";
import Genderless from "../assets/genderless.svg";
import Dead from "../assets/dead.svg";

const genderIcons = {
  Female: Female,
  Male: Male,
  unknown: Unknown,
  Genderless: Genderless,
};

export default function Card({ item, allCharacteristic }) {
  const [popUp, setPopUp] = useState(false);

  const toggleModal = () => {
    setPopUp(!popUp);
  };

  return (
    <>
      <article className="card">
        <div
          className="card-image-container"
          onClick={allCharacteristic ? null : toggleModal}
        >
          <img src={item.image} alt={item.name} />
          <div className="card-tags-container">
            <div className="card-tag">
              <img src={genderIcons[item.gender]} alt={item.gender} />
            </div>
            {item.status === "Dead" && (
              <div className="card-tag">
                <img src={Dead} alt={item.status} />
              </div>
            )}
          </div>
        </div>
        <p className="card-name">{item.name}</p>
        <p className="card-characteristic">
          <strong>Type:</strong> {item.type ? item.type : "Unknown"}
        </p>
        {allCharacteristic && (
          <div className="card-characteristic">
            <p>
              <strong>Species:</strong>{" "}
              {item.species ? item.species : "Unknown"}
            </p>
            <p>
              <strong>Origin:</strong>{" "}
              {item.origin.name ? item.origin.name : "Unknown"}
            </p>
            <p>
              <strong>Location:</strong>{" "}
              {item.location.name ? item.location.name : "Unknown"}
            </p>
            <p>
              <strong>Created:</strong>{" "}
              {item.created ? formatDate(item.created) : "Unknown"}
            </p>
          </div>
        )}
      </article>
      <Popup character={item} popUp={popUp} toggleModal={toggleModal} />
    </>
  );
}
