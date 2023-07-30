const baseUrl = "https://api.themoviedb.org/3/";
const token =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZDUzN2MzM2FhMWJiYTkyZDU0NjJiMmNhY2FkNjIyNyIsInN1YiI6IjY0YzRhZmFmOTVjZTI0MDExZTU4ODZiOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HZK7CcIr7WQnvZAkCxAKeRnFKhH6oCd1082f0imahpw";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZDUzN2MzM2FhMWJiYTkyZDU0NjJiMmNhY2FkNjIyNyIsInN1YiI6IjY0YzRhZmFmOTVjZTI0MDExZTU4ODZiOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HZK7CcIr7WQnvZAkCxAKeRnFKhH6oCd1082f0imahpw",
  },
};

export const getMovies = async (url) => {
  const fetchData = await fetch(baseUrl + url, options);
  const json = await fetchData.json();
  return json;
};

export const getMovieById = async (url, id) => {
  const fetchData = await fetch(baseUrl + url + id, options);
  const json = await fetchData.json();
  return json;
};

export const getMovieCreditsById = async (url) => {
  const fetchData = await fetch(baseUrl + url, options);
  const json = await fetchData.json();
  return json;
};

