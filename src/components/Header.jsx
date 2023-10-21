import React from "react";

// assets
import logo from "../assets/logo.svg";

export default function Header() {
  return (
    <div className="header">
      <img src={logo} alt="rick and morty logo" />
    </div>
  );
}
