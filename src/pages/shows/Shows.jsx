import React, { useEffect, useState } from "react";
import "./sass/style.css";
import { Link } from "react-router-dom";
import { getTopRatedTvShows, getTvShows } from "../../utils/api";
import Heading from "../../components/heading/Heading";
import Schimmer from "../../components/schimmer/Schimmer";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import { Navigation, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { poster_url } from "../../utils/constants";
import SearchBar from "../../components/searchbar/SearchBar";

export default function Shows() {
  const [popularTvShows, setPopularTvShows] = useState([]);
  const [topRatedTvShows, setTopRatedTvShows] = useState([]);

  const getTv = () => {
    getTvShows("tv/popular")
      .then((res) => {
        setPopularTvShows(res.results);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getTopRatedTv = () => {
    getTopRatedTvShows("tv/top_rated")
      .then((res) => {
        setTopRatedTvShows(res.results);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    document.body.scrollTop = "0px";
    getTv();
    getTopRatedTv();
  }, []);

  return (
    <>
      <section className="mt-10 px-5 md:px-0">
        <SearchBar />
      </section>

      {topRatedTvShows.length === 0 ? (
        <Schimmer />
      ) : (
        <section className="top-rated-shows mt-14 px-5 md:px-0">
          <Heading title="Top Rated Tv Shows" />
          <section className="top-rated-shows-inner  max-w-[1200px] w-full mx-auto pb-14">
            <Swiper
              className="mySwiper"
              spaceBetween={20}
              slidesPerView={6}
              grabCursor={true}
              modules={[Navigation, Scrollbar, FreeMode]}
              navigation={true}
              breakpoints={{
                1280: {
                  slidesPerView: 6,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 5,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 4,
                  spaceBetween: 20,
                },
                640: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
                480: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                0: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
              }}
            >
              {topRatedTvShows.map((shows) => {
                return (
                  <SwiperSlide key={shows.id}>
                    <Link to={"/tvshow/" + shows.id}>
                      <div className="moviecard max-w-[250px] w-full ">
                        <div className="img">
                          <img
                            className="w-full h-64 rounded-md"
                            src={
                              shows.poster_path
                                ? poster_url + shows?.poster_path
                                : "https://cdn-icons-png.flaticon.com/512/2815/2815428.png"
                            }
                            alt={shows?.title}
                          />
                          <p className="vote-average font-bold text-xs">
                            {shows?.vote_average?.toString()?.slice(0, 3)}
                          </p>
                        </div>
                        <div className="description pt-6">
                          <h1 className="text-sm font-bold">
                            {shows.name.slice(0, 20) + "..."}
                          </h1>
                          <small>{shows?.release_date}</small>
                        </div>
                      </div>
                    </Link>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </section>
        </section>
      )}

      {popularTvShows.length === 0 ? (
        <Schimmer />
      ) : (
        <section className="popular-shows mb-14 px-5 md:px-0">
          <Heading title="Popular Tv Shows" />
          <section className="popular-shows-inner  max-w-[1200px] w-full mx-auto ">
            <Swiper
              className="mySwiper"
              spaceBetween={20}
              slidesPerView={6}
              grabCursor={true}
              modules={[Navigation, Scrollbar, FreeMode]}
              navigation={true}
              breakpoints={{
                1280: {
                  slidesPerView: 6,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 5,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 4,
                  spaceBetween: 20,
                },
                640: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
                480: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                0: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
              }}
            >
              {popularTvShows.map((shows) => {
                return (
                  <SwiperSlide key={shows.id}>
                    <Link to={"/tvshow/" + shows.id}>
                      <div className="moviecard max-w-[250px] w-full ">
                        <div className="img">
                          <img
                            className="w-full h-64 rounded-md"
                            src={
                              shows.poster_path
                                ? poster_url + shows?.poster_path
                                : "https://cdn-icons-png.flaticon.com/512/2815/2815428.png"
                            }
                            alt={shows?.title}
                          />
                          <p className="vote-average font-bold text-xs">
                            {shows?.vote_average?.toString()?.slice(0, 3)}
                          </p>
                        </div>
                        <div className="description pt-6">
                          <h1 className="text-sm font-bold">
                            {shows.name.slice(0, 20) + "..."}
                          </h1>
                          <small>{shows?.release_date}</small>
                        </div>
                      </div>
                    </Link>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </section>
        </section>
      )}
    </>
  );
}
