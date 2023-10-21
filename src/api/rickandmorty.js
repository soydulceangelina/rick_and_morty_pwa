import axios from "axios";

export const fetchCharacters = (url) => {
  axios
    .get(url)
    .then((data) => {
      return data.data;
    })
    .catch((error) => {
      console.log(error);
    });
};