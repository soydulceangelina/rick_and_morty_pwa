import React from "react";
import styles from './General.module.scss';
// components
import GenderData from "../genderData/GenderData";

export default function General() {
  return (
    <div className={styles.container}>
      <h2>General Information</h2>
      <GenderData/>
    </div>
  );
}
