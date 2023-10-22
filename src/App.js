import React, { useState, useEffect } from "react";
import axios from "axios";

// components
import Characters from "./components/Characters";
import Header from "./components/Header";
import General from "./components/General";

function App() {
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState({});
  const url = "https://rickandmortyapi.com/api/character";

  const fetchCharacters = (url) => {
    axios
      .get(url)
      .then((data) => {
        setCharacters(data.data.results);
        setInfo(data.data.info);
      })
      .catch((error) => {
        console.error(
          "There has been a problem with your fetch operation:",
          error
        );
      });
  };

  useEffect(() => {
    fetchCharacters(url);
  }, []);

  return (
    <div>
      <header>
        <Header/>
      </header>
      <main className="main-container">
        <Characters characters={characters} fetch={fetchCharacters} info={info}/>
        <General/>
      </main>
    </div>
  );
}

export default App;
