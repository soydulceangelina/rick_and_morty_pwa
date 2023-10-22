import React from "react";
// assets
import LoaderGif from "../assets/loader.gif";

export default function Loader() {
  return (
    <div className="loader-container">
      <img src={LoaderGif} alt="loader" />
    </div>
  );
}
