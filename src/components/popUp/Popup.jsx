import React from "react";
import styles from './PopUp.module.scss';
// components
import Card from "../card/Card";
// assets
import Close from "../../assets/close.svg";

export default function Popup({ character, popUp, togglePopUp }) {
  return (
    <>
      {popUp && (
        <div className={styles.container}>
          <div onClick={togglePopUp} className={styles.overlay}>
            <div className={styles.content}>
              <Card
                item={character}
                allCharacteristic={true}
                onClick={togglePopUp}
              />
              <div className={styles.close} onClick={togglePopUp}>
                <img src={Close} alt="close" />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
