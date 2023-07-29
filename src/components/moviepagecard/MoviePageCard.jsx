import React from "react";
import { poster_url } from "../../utils/constants";

import dayjs from "dayjs";
import SchimmerForMoviePage from "../schimmer/SchimmerForMoviePage";

export default function MoviePageCard(props) {
  const { title, overview, release_date, poster_path, genres, tagline } = props;

  let releaseData = dayjs(release_date).format("DD/MM/YYYY");

  return (
    <section className="movie-details w-full h-96 flex justify-center items-center">

      <div className="movie-details-inner flex justify-between max-w-[1200px] w-full mx-auto">
        <div className="img max-w-[20%] w-full">
          <img src={poster_url + poster_path} alt={title} />
        </div>
        <div className="description max-w-[80%] w-full flex justify-around items-start flex-col px-5">
          <div className="title">
            <h1 className="font-bold text-4xl">{title}</h1>
            <p className="font-bold">{tagline}</p>
            <p className="text-sm">{releaseData} </p>
          </div>
          <div className="overview max-w-[90%] w-full py-3">
            <p className="font-bold text-xl">Overview </p>
            <h2 className="">{overview}</h2>
          </div>
        </div>
      </div>
    </section>
  );
}
