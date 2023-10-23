import React from "react";

// components
import Header from "./components/header/Header";
import Characters from "./components/characters/Characters";
import General from "./components/general/General";

function App() {

  return (
    <div>
      <header>
        <Header />
      </header>
      <main className="main-container">
        <Characters />
        <General />
      </main>
    </div>
  );
}

export default App;
