import React, { useEffect, useState } from "react";
import "./sass/style.css";
import Hero from "../../components/hero/Hero";

import MovieCard from "../../components/moviecard/MovieCard";
import Heading from "../../components/heading/Heading";
import { getMovies } from "../../utils/api";
import Schimmer from "../../components/schimmer/Schimmer";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import { Navigation, Pagination, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function Home() {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    let s = setInterval(() => {
      getPopularMovies();
      clearInterval(s);
    }, 1000);
  }, []);

  const getPopularMovies = () => {
    getMovies("movie/popular").then((res) => setPopularMovies(res.results));
  };

  return (
    <>
      <main>
        <Hero
          title="Welcome to MoiveHub"
          description="Millions of movies, TV shows and people to discover. Explore now."
        />
      </main>
      {popularMovies.length === 0 ? (
        <Schimmer />
      ) : (
        <section className="popular-movies w-full px-5 mt-10 pb-14">
          <Heading title="Popular Movies" />
          <div className="popular-movies-inner  max-w-[1200px] w-full mx-auto ">
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
              {popularMovies.map((movies) => {
                return (
                  <SwiperSlide key={movies.id}>
                    <MovieCard {...movies} key={movies.id} />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </section>
      )}
    </>
  );
}
