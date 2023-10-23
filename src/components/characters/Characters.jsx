import React, { useState, useEffect } from "react";
import { fetchCharacters } from "../../api/rickandmorty";
import styles from './Character.module.scss';
// components
import Card from "../card/Card";
import Pagination from "../pagination/Pagination";
import Loader from "../loader/Loader";
import Snackbar from "../Snackbar";
import Popup from "../popUp/Popup";

export default function Characters() {
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState({});
  const [loader, setLoader] = useState(true);
  const [error, setError] = useState(false);
  const [popUp, setPopUp] = useState(false);
  const [characterSelected, setCharacterSelected] = useState({});
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

  const togglePopUp = () => {
    setPopUp(!popUp);
  };

  return (
    <>
      {loader ? (
        <Loader />
      ) : (
        <div className={styles.container}>
          <h2>Characters</h2>
          <div className={styles.grid}>
            {characters.map((item, index) => (
              <Card
                key={index}
                item={item}
                togglePopUp={togglePopUp}
                setItem={setCharacterSelected}
              />
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
      {error && (
        <Snackbar
          message={
            "An error occurred with a request, please try again later 😥"
          }
        />
      )}
      <Popup
        character={characterSelected}
        popUp={popUp}
        togglePopUp={togglePopUp}
      />
    </>
  );
}
