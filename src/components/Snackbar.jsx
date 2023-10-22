import React, { useEffect } from "react";

export default function Snackbar({ message, action }) {
  function myFunction() {
    let x = document.getElementById("snackbar");
    x.className = "show";
    setTimeout(function () {
      x.className = x.className.replace("show", "");
    }, 5000);
  }

  useEffect(() => {
    if (action) {
      myFunction();
    }
  }, [action]);
  
  return <div id="snackbar">{message}</div>;
}
