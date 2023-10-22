import axios from "axios";

export const fetchCharacters = (url, setCharacters, setInfo) => {
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

export const fetchQuery = (url, setQuery) => {
  axios
    .get(url)
    .then((data) => {
      setQuery(data.data.info);
    })
    .catch((error) => {
      console.error(
        "There has been a problem with your fetch operation:",
        error
      );
    });
};
