import React from "react";
// components
import Card from "./Card";
// assets
import close from "../assets/close.png";

export default function Popup({ character, popUp, toggleModal }) {
  if (popUp) {
    document.body.classList.add("active-popUp");
  } else {
    document.body.classList.remove("active-popUp");
  }

  return (
    <>
      {popUp && (
        <div className="popUp">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="popUp-content">
            <Card
              item={character}
              allCharacteristic={true}
              onClick={toggleModal}
            />
            <div className="close-popUp" onClick={toggleModal}>
              <img src={close} alt="close" />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
