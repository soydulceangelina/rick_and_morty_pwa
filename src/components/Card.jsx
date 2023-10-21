import React, { useState } from "react";
import Popup from "./Popup";

export default function Card({ item }) {
  const [popUp, setPopUp] = useState(false);

  const toggleModal = () => {
    setPopUp(!popUp);
  };
  return (
    <>
      <article className="card" onClick={toggleModal}>
        <img src={item.image} alt={item.name} />
        <p>
          <strong>Name:</strong> {item.name}
        </p>
        <p>
          <strong>Gerder:</strong> {item.gender}
        </p>
        <p>
          <strong>Status:</strong> {item.status}
        </p>
        <p>
          <strong>Type:</strong> {item.type ? item.type : "???"}
        </p>
      </article>
      <Popup character={item} popUp={popUp} toggleModal={toggleModal} />
    </>
  );
}
