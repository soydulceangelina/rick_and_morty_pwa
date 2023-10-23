import React from "react";
import styles from './Loader.module.scss';
// assets
import LoaderGif from "../../assets/loader.gif";

export default function Loader() {
  return (
    <div className={styles.container}>
      <img src={LoaderGif} alt="loader" />
    </div>
  );
}
