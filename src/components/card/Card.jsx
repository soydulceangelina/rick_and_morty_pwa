import React from "react";
import { formatDate } from "../../utils/formatDate";
import styles from "./Card.module.scss";
// assets
import Female from "../../assets/female.svg";
import Male from "../../assets/male.svg";
import Unknown from "../../assets/unknown.svg";
import Genderless from "../../assets/genderless.svg";
import Dead from "../../assets/dead.svg";
import Alive from "../../assets/alive.svg";
import UnknownAlive from "../../assets/unknow-alive.svg";

const genderIcons = {
  Female: Female,
  Male: Male,
  unknown: Unknown,
  Genderless: Genderless,
};

const statusIcons = {
  Dead: Dead,
  Alive: Alive,
  unknown: UnknownAlive,
};

export default function Card({
  item,
  allCharacteristic,
  togglePopUp,
  setItem,
}) {
  return (
    <>
      <article className={styles.container}>
        <div
          className={styles.imageContainer}
          onClick={() => {
            if (!allCharacteristic) {
              setItem(item);
              togglePopUp();
            }
          }}
        >
          <img src={item.image} alt={item.name} />
          <div className={styles.tagsContainer}>
            <div className={styles.tag}>
              <img src={genderIcons[item.gender]} alt={item.gender} />
            </div>
            <div className={styles.tag}>
              <img src={statusIcons[item.status]} alt={item.status} />
            </div>
          </div>
        </div>
        <p className={styles.name}>{item.name}</p>
        <p className={styles.characteristic}>
          <strong>Type:</strong> {item.type ? item.type : "Unknown"}
        </p>
        {allCharacteristic && (
          <div className={styles.characteristic}>
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
    </>
  );
}
