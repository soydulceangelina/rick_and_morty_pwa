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
            <article className="card" onClick={toggleModal}>
              <img src={character.image} alt={character.name} />
              <p>
                <strong>Name:</strong> {character.name}
              </p>
              <p>
                <strong>Gerder:</strong> {character.gender}
              </p>
              <p>
                <strong>Status:</strong> {character.status}
              </p>
              <p>
                <strong>Type:</strong> {character.type ? character.type : "???"}
              </p>
            </article>
            <button className="close-popUp" onClick={toggleModal}>
              CLOSE
            </button>
          </div>
        </div>
      )}
    </>
  );
}
