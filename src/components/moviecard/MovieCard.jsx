import React from "react";
import { poster_url } from "../../utils/constants";
import "./sass/style.css";
import { Link } from "react-router-dom";
import dayjs from "dayjs";

export default function MovieCard(props) {
  const { id, poster_path, title, release_date, vote_average } = props;

  const releaseDate = dayjs(release_date).format("DD/MM/YYYY");

  return (
    <Link to={"/movie/" + id}>
      <div className="moviecard max-w-[250px] w-full ">
        <div className="img">
          <img
            className="w-full h-64 rounded-md"
            src={
              poster_path
                ? poster_url + poster_path
                : "https://cdn-icons-png.flaticon.com/512/2815/2815428.png"
            }
            alt={title}
          />
          <p className="vote-average font-bold text-xs">
            {vote_average?.toString()?.slice(0, 3)}
          </p>
        </div>
        <div className="description pt-6">
          <h1 className="text-sm font-bold">{title}</h1>
          <small>{releaseDate}</small>
        </div>
      </div>
    </Link>
  );
}
