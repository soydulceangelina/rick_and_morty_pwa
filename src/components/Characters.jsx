import React, { useState, useEffect } from "react";
import { fetchCharacters } from "../api/rickandmorty";
// components
import Card from "./Card";
import Pagination from "./Pagination";
import Loader from "./Loader";
import Snackbar from './Snackbar'

export default function Characters() {
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState({});
  const [loader, setLoader] = useState(true);
  const [error, setError] = useState(false);
  const url = "https://rickandmortyapi.com/api/character";

  useEffect(() => {
    fetchCharacters(url, setCharacters, setInfo, setLoader, setError);
  }, []);

  const handleNextPage = () => {
    setLoader(true);
    fetchCharacters(info.next, setCharacters, setInfo, setLoader, setError);
    window.scrollTo(0, 0);
  };

  const handlePreviousPage = () => {
    setLoader(true);
    fetchCharacters(info.prev, setCharacters, setInfo, setLoader, setError);
    window.scrollTo(0, 0);
  };

  return (
    <>
      {loader ? (
        <Loader />
      ) : (
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
      )}
      {error && <Snackbar message={'An error occurred with a request, please try again later 😥'}/>}
    </>
  );
}
