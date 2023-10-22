import React from "react";

// components
import Header from "./components/Header";
import Characters from "./components/Characters";
import General from "./components/General";

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
