import React, { useEffect, useState } from "react";
import { getMovieById, getMovieCreditsById } from "../../utils/api";
import { Link, useParams } from "react-router-dom";
import { cast_img } from "../../utils/constants";

export default function TvCast() {
  const [tvShowDetail, setTvShowDetail] = useState([]);
  const [tvShowCreditsCast, setTvShowCreditsCast] = useState([]);

  const { id } = useParams();

  const getMoviesById = () => {
    getMovieById("tv/", id)
      .then((result) => {
        setTimeout(() => {
          setTvShowDetail(result);
        }, 1000);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getMoviesCreditsById = () => {
    getMovieCreditsById(`tv/${id}/credits`).then((res) => {
      try {
        setTvShowCreditsCast(res.cast);
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
          <h1 className="text-2xl italic font-bold">{tvShowDetail?.name}</h1>
          <p className="text-1xl italic">{tvShowDetail?.tagline}</p>
        </div>
        <div className="mt-14 pb-5 flex justify-between items-center">
          <div>
            <h1 className="font-bold text-2xl">
              Cast ({tvShowCreditsCast.length})
            </h1>
          </div>
          <nav>
            <Link to={"tvshow/" + id} className="underline">
              {" "}
              Back
            </Link>
          </nav>
        </div>
        <div className="cast grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-5 ">
          {tvShowCreditsCast.map((cast) => {
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
                    alt={cast?.name}
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
