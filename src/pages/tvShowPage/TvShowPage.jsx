import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getMovieById, getMovieCreditsById } from "../../utils/api";
import { cast_img, poster_url } from "../../utils/constants";
import BackgroundImage from "../../components/backgroundImage/BackgroundImage";
import SchimmerForMoviePage from "../../components/schimmer/SchimmerForMoviePage";

import dayjs from "dayjs";

export default function TvShowPage() {
  const [tvShowDetails, setTvShowDetails] = useState([]);
  const [tvShowCreditsCast, settvShowCreditsCast] = useState([]);
  const [tvShowCreditsCrew, settvShowCreditsCrew] = useState([]);
  const { id } = useParams();

  const getTvShowById = () => {
    getMovieById("tv/" + id)
      .then((result) => {
        setTvShowDetails(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // movie credits details api call
  const getMoviesCreditsById = () => {
    getMovieCreditsById(`tv/${id}/credits`).then((res) => {
      try {
        // movie cast list
        settvShowCreditsCast(res.cast);
        // movie crew list
        settvShowCreditsCrew(res.crew);
      } catch (error) {
        console.log(error);
      }
    });
  };

  useEffect(() => {
    getTvShowById();
    getMoviesCreditsById();
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {tvShowDetails.length === 0 ? (
        <SchimmerForMoviePage />
      ) : (
        <section className="movie-details w-full min-h-96 flex flex-col justify-center items-cente ">
          <div className="movie-details-inner sm:flex justify-between max-w-[1200px] w-full mx-auto px-5 sm:px-0">
            <div className="img max-w-[100%] sm:max-w-[250px] w-full">
              <img
                className="max-w-[100%] h-[100%] object-cover sm:max-w-[300px] w-full"
                src={poster_url + tvShowDetails.poster_path}
                alt={tvShowDetails.title}
              />
            </div>
            <div className="description max-w-[100%] sm:max-w-[80%] w-full flex justify-around items-start flex-col pt-5 px-0 sm:px-5">
              <div className="title">
                <h1 className="font-bold text-2xl lg:text-4xl">
                  {tvShowDetails?.name}
                </h1>
                <p className="font-bold">
                  {dayjs(tvShowDetails?.first_air_date).format("MM / YYYY")} -{" "}
                  {dayjs(tvShowDetails?.last_air_date).format("MM / YYYY")}
                </p>
                <p className="text-sm">{tvShowDetails?.release_date} </p>
                <p className="text-sm">
                  Total Episodes - {tvShowDetails.number_of_episodes}
                </p>
                <p className="text-sm">
                  Seasons - {tvShowDetails.number_of_seasons}
                </p>
              </div>
              <div className="overview max-w-[100%] lg:max-w-[70%] xl:max-w-[80%] w-full py-3">
                <p className="font-bold text-lg lg:text-xl">Overview </p>
                <h2 className="">{tvShowDetails?.overview}</h2>
              </div>
            </div>
          </div>

          <BackgroundImage {...tvShowDetails} />
        </section>
      )}

      {/* movie credits */}
      <section className="mt-7 min-h-[40vh] px-5 w-full pt-10 pb-10">
        <div className="max-w-[1200px] mx-auto ">
          <h1 className="text-2xl md:text-3xl font-bold">Movie Credits</h1>

          {/* movie cast list */}
          <div className="py-5 flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold">
                Cast ({tvShowCreditsCast?.length})
              </h2>
            </div>
            <nav>
              <Link to={"/tvcast/" + id} className="underline">
                View All
              </Link>
            </nav>
          </div>
          <div className="movie-credits w-full grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-5">
            {tvShowCreditsCast?.slice(0, 12).map((cast) => {
              return (
                <div
                  className="max-w-[200px] w-full flex flex-col justify-start"
                  key={cast.id}
                >
                  <div className="img w-full flex justify-center">
                    <img
                      className="w-[100px] h-[100px] object-cover rounded-full"
                      src={
                        cast?.profile_path
                          ? cast_img + cast?.profile_path
                          : "https://cdn-icons-png.flaticon.com/512/2815/2815428.png"
                      }
                      alt={cast?.name}
                    />
                  </div>
                  <div className="description text-center">
                    <p className="font-bold text-sm">{cast?.name}</p>
                    <p className="text-xs italic">{cast?.character}</p>
                  </div>
                </div>
              );
            })}
          </div>
          {/* movie cast list section ends here */}

          {/* movie crew list */}
          <section className="flex justify-between items-center mt-10 py-5">
            <div>
              <h2 className="text-2xl font-bold">
                Crew ({tvShowCreditsCrew?.length})
              </h2>
            </div>
            <nav>
              <Link to={"/tvcrew/" + id} className="underline">
                View All
              </Link>
            </nav>
          </section>
          <section className="movie-credits w-full grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-5">
            {tvShowCreditsCrew?.slice(0, 5).map((crew) => {
              return (
                <div
                  className="max-w-[200px] w-full flex flex-col justify-start"
                  key={Math.random()}
                >
                  <div className="img w-full flex justify-center">
                    <img
                      className="w-[100px] h-[100px] object-cover rounded-full"
                      src={
                        crew?.profile_path
                          ? cast_img + crew?.profile_path
                          : "https://cdn-icons-png.flaticon.com/512/2815/2815428.png"
                      }
                      alt={crew?.name}
                    />
                  </div>
                  <div className="description text-center">
                    <p className="font-bold text-sm">{crew?.name}</p>
                    <p className="text-xs italic">{crew?.job}</p>
                  </div>
                </div>
              );
            })}
          </section>
          {/* movie crew list section ends here */}
        </div>
      </section>
      {/* movie credits section ends here */}
    </>
  );
}
