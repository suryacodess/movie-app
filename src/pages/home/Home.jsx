import React, { useState } from "react";
import Hero from "../../components/hero/Hero";

import results from "../../popularmoviesdemo";
import MovieCard from "../../components/moviecard/MovieCard";
import Heading from "../../components/heading/Heading";

export default function Home() {
  const [popularMovies, setPopularMovies] = useState(results);

  return (
    <>
      <main>
        <Hero
          title="Welcome to MoiveHub"
          description="Millions of movies, TV shows and people to discover. Explore now."
        />
      </main>
      <section className="popular-movies w-full px-5 mt-10">
        <Heading title="Popular Movies" />
        <div className="popular-movies-inner max-w-[1200px] w-full mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">
          {popularMovies.map((movies) => {
            return <MovieCard {...movies} key={movies.id} />;
          })}
        </div>
      </section>
    </>
  );
}
