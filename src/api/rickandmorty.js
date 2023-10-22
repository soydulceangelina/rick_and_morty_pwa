import axios from "axios";

export const fetchCharacters = (url, setCharacters, setInfo, setLoader, setError) => {
  axios
    .get(url)
    .then((data) => {
      setCharacters(data.data.results);
      setInfo(data.data.info);
      setLoader(false);
    })
    .catch((error) => {
      setError(true)
      console.error(
        "There has been a problem with your fetch characters operation:",
        error
      );
    });
};

export const fetchQuery = (url, setQuery, setLoader, setError) => {
  axios
    .get(url)
    .then((data) => {
      setQuery(data.data.info);
      setLoader(false);
    })
    .catch((error) => {
      setError(true)
      console.error(
        "There has been a problem with your fetch query operation:",
        error
      );
    });
};
