import React, { useState, useEffect } from "react";
import { fetchCharacters } from "../api/rickandmorty";
// components
import Card from "./Card";
import Pagination from "./Pagination";

export default function Characters() {
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState({});
  const url = "https://rickandmortyapi.com/api/character";

  useEffect(() => {
    fetchCharacters(url, setCharacters, setInfo);
  }, []);

  const handleNextPage = () => {
    fetchCharacters(info.next, setCharacters, setInfo);
    window.scrollTo(0, 0);
  };

  const handlePreviousPage = () => {
    fetchCharacters(info.prev, setCharacters, setInfo);
    window.scrollTo(0, 0);
  };
  
  return (
    <div className="characters-container">
      <h2>Characters</h2>
      <div className="grid">
        {characters.map((item, index) => (
          <Card key={index} item={item} />
        ))}
      </div>
      <Pagination
        prev={info.prev}
        next={info.next}
        onPrevious={handlePreviousPage}
        onNext={handleNextPage}
      />
    </div>
  );
}
