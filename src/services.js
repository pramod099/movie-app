import axios from "axios";

export const getMovies = async () => {
  await axios.get("http://localhost:5001/api").then((response) => {
    setMovies((movies = response.data));
  });
};
