import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieById } from "../../utils/api";
import BackgroundImage from "../../components/backgroundImage/BackgroundImage";
import MoviePageCard from "../../components/moviepagecard/MoviePageCard";

export default function MoviePage() {
  const [movieDetail, setMovieDetail] = useState();
  const { id } = useParams();

  console.log(movieDetail);

  const getMoviesById = () => {
    getMovieById("movie/", id)
      .then((result) => {
        setMovieDetail(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getMoviesById();
  }, []);

  return (
    <main>
      <MoviePageCard {...movieDetail} />
      <BackgroundImage {...movieDetail} />
    </main>
  );
}
