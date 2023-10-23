import React from "react";
// components
import Card from "./Card";
// assets
import Close from "../assets/close.svg";

export default function Popup({ character, popUp, togglePopUp }) {
  return (
    <>
      {popUp && (
        <div className="popUp">
          <div onClick={togglePopUp} className="overlay">
            <div className="popUp-content">
              <Card
                item={character}
                allCharacteristic={true}
                onClick={togglePopUp}
              />
              <div className="close-popUp" onClick={togglePopUp}>
                <img src={Close} alt="close" />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
