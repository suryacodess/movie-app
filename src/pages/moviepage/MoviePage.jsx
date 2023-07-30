import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getMovieById, getMovieCreditsById } from "../../utils/api";
import BackgroundImage from "../../components/backgroundImage/BackgroundImage";
import MoviePageCard from "../../components/moviepagecard/MoviePageCard";
import SchimmerForMoviePage from "../../components/schimmer/SchimmerForMoviePage";
import { cast_img } from "../../utils/constants";

export default function MoviePage() {
  const [movieDetail, setMovieDetail] = useState([]);
  const [movieCreditsCast, setMovieCreditsCast] = useState([]);
  const [movieCreditsCrew, setMovieCreditsCrew] = useState([]);

  const { id } = useParams();

  // movie detail api
  const getMoviesById = () => {
    getMovieById("movie/", id)
      .then((result) => {
        setTimeout(() => {
          setMovieDetail(result);
        }, 1000);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // movie credits details api
  const getMoviesCreditsById = () => {
    getMovieCreditsById(`movie/${id}/credits`).then((res) => {
      try {
        // movie cast list
        setMovieCreditsCast(res.cast);
        // movie crew list
        setMovieCreditsCrew(res.crew);
      } catch (error) {
        console.log(error);
      }
    });
  };

  useEffect(() => {
    getMoviesById();
    getMoviesCreditsById();
  }, []);

  return (
    <main>
      {movieDetail.length === 0 ? (
        <SchimmerForMoviePage />
      ) : (
        <>
          <MoviePageCard {...movieDetail} />
          <BackgroundImage {...movieDetail} />
        </>
      )}

      {/* movie credits */}
      <section className="mt-7 min-h-[40vh] px-5 w-full pt-10 pb-10">
        <div className="max-w-[1200px] mx-auto ">
          <h1 className="text-2xl md:text-3xl font-bold">Movie Credits</h1>

          {/* movie cast list */}
          <div className="py-5 flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold">
                Cast ({movieCreditsCast.length})
              </h2>
            </div>
            <nav>
              <Link to={"/cast/" + id} className="underline">
                View All
              </Link>
            </nav>
          </div>
          <div className="movie-credits w-full grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-5">
            {movieCreditsCast.slice(0, 12).map((cast) => {
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
                      alt={cast.name}
                    />
                  </div>
                  <div className="description text-center">
                    <p className="font-bold text-sm">{cast.name}</p>
                    <p className="text-xs">{cast.character}</p>
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
                Crew ({movieCreditsCrew.length})
              </h2>
            </div>
            <nav>
              <Link to={"/crew/" + id} className="underline">
                View All
              </Link>
            </nav>
          </section>
          <section className="movie-credits w-full grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-5">
            {movieCreditsCrew.slice(0, 5).map((crew) => {
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
                      alt={crew.name}
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
    </main>
  );
}
