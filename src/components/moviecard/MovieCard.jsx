import React from "react";
import { poster_url } from "../../utils/constants";
import "./sass/style.css";

export default function MovieCard(props) {
  const { poster_path, title, release_date, vote_average } = props;

  return (
    <div className="moviecard max-w-[250px] w-full ">
      <div className="img">
        <img
          className="w-full rounded-md"
          src={poster_url + poster_path}
          alt={title}
        />
        <p className="vote-average font-bold text-xs">{vote_average}</p>
      </div>
      <div className="description pt-6">
        <h1 className="text-sm font-bold">{title}</h1>
        <small>{release_date}</small>
      </div>
    </div>
  );
}
