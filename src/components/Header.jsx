import React from "react";

// assets
import Logo from "../assets/logo.svg";

export default function Header() {
  return (
    <div className="header">
      <img src={Logo} alt="rick and morty logo" />
      <p>Rick and Morty</p>
    </div>
  );
}
