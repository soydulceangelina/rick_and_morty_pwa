import React from "react";
import styles from './Header.module.scss';
// assets
import Logo from "../../assets/logo.svg";

export default function Header() {
  return (
    <div className={styles.container}>
      <img src={Logo} alt="rick and morty logo" />
      <p>Rick and Morty</p>
    </div>
  );
}
