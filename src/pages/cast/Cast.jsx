import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getMovieById, getMovieCreditsById } from "../../utils/api";
import BackgroundImage from "../../components/backgroundImage/BackgroundImage";
import { cast_img } from "../../utils/constants";

export default function Cast() {
  const [movieDetail, setMovieDetail] = useState([]);
  const [movieCreditsCast, setMovieCreditsCast] = useState([]);

  const { id } = useParams();

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

  const getMoviesCreditsById = () => {
    getMovieCreditsById(`movie/${id}/credits`).then((res) => {
      try {
        setMovieCreditsCast(res.cast);
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
    <main className="w-full px-5">
      <section className="max-w-[1200px] w-full mx-auto pt-5 pb-10">
        <div className="description px-5 lg:px-0 text-center">
          <h1 className="text-2xl italic font-bold">{movieDetail?.title}</h1>
          <p className="text-1xl italic">{movieDetail?.tagline}</p>
        </div>
        <div className="mt-14 pb-5 flex justify-between items-center">
          <div>
            <h1 className="font-bold text-2xl">Cast</h1>
          </div>
          <nav>
            <Link to={"movie/" + id} className="underline"> Back</Link>
          </nav>
        </div>
        <div className="cast grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-5 ">
          {movieCreditsCast.map((cast) => {
            return (
              <div
                key={cast?.id}
                className="w-full flex flex-col justify-center items-center"
              >
                <div className="img w-full h-[100px]">
                  <img
                    className="w-full h-full object-cover"
                    src={
                      cast.profile_path
                        ? cast_img + cast?.profile_path
                        : "https://cdn-icons-png.flaticon.com/512/2815/2815428.png"
                    }
                    alt={cast.name}
                  />
                </div>
                <div className="text-start w-full pt-2">
                  <h1 className="font-bold text-sm">{cast?.name}</h1>
                  <p className="text-xs italic">{cast?.character}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
