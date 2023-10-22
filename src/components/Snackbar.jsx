import React, { useEffect } from "react";

export default function Snackbar({ message, action }) {
  function myFunction() {
    let x = document.getElementById("snackbar");
    x.className = "show";
    setTimeout(function () {
      x.className = x.className.replace("show", "");
    }, 3000);
  }

  useEffect(() => {
    myFunction();
  }, []);

  return <div id="snackbar">{message}</div>;
}
