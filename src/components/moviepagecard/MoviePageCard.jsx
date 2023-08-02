import React from "react";
import { poster_url } from "../../utils/constants";

import dayjs from "dayjs";

export default function MoviePageCard(props) {
  const {
    title,
    overview,
    release_date,
    poster_path,
    tagline,
    director,
  } = props;

  let releaseData = dayjs(release_date).format("DD/MM/YYYY");

  return (
    <section className="movie-details w-full min-h-96 flex justify-center items-center px-5">
      <div className="movie-details-inner sm:flex justify-between max-w-[1200px] w-full mx-auto">
        <div className="img max-w-[100%] sm:max-w-[250px] w-full">
          <img
            className="max-w-[100%] h-[100%] object-cover sm:max-w-[300px] w-full"
            src={poster_url + poster_path}
            alt={title}
          />
        </div>
        <div className="description max-w-[100%] sm:max-w-[80%] w-full flex justify-around items-start flex-col pt-5 px-0 sm:px-5">
          <div className="title">
            <h1 className="font-bold text-2xl lg:text-4xl">{title}</h1>
            <p className="font-bold">{tagline}</p>
            <p className="">directed by - {director[0]?.name}</p>
            <p className="text-sm">{releaseData} </p>
          </div>
          <div className="overview max-w-[100%] lg:max-w-[70%] xl:max-w-[80%] w-full py-3">
            <p className="font-bold text-lg lg:text-xl">Overview </p>
            <h2 className="">{overview}</h2>
          </div>
        </div>
      </div>
    </section>
  );
}
