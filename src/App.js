import React, { useState, useEffect } from "react";
import axios from "axios";

// components
import Characters from "./components/Characters";
import Pagination from "./components/Pagination";
import Header from "./components/Header";

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

  const handleNextPage = () => {
    fetchCharacters(info.next);
    window.scrollTo(0, 0);
  };

  const handlePreviousPage = () => {
    fetchCharacters(info.prev);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    fetchCharacters(url);
  }, []);

  return (
    <div>
      <header>
        <Header/>
      </header>
      <main>
        <Characters characters={characters} />
        <Pagination
          prev={info.prev}
          next={info.next}
          onPrevious={handlePreviousPage}
          onNext={handleNextPage}
        />
      </main>
    </div>
  );
}

export default App;
