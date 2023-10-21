import React from "react";

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
            <img src={character.image} alt={character.name} />
            <p>{character.name}</p>
            <p>{character.gender}</p>
            <p>{character.status}</p>
            <p>{character.type}</p>
            <button className="close-popUp" onClick={toggleModal}>
              CLOSE
            </button>
          </div>
        </div>
      )}
    </>
  );
}
