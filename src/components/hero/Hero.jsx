import React from "react";
import SearchBar from "../searchbar/SearchBar";

export default function Hero({ title, description }) {
  return (
    <section className="hero w-full h-auto flex justify-center items-center flex-col px-5">
      <div className="hero-inner max-w-[1200px] w-full mt-6 md:mt-8 flex justify-star items-start flex-col mx-auto">
        <h1 className="text-5xl font-bold">{title}</h1>
        <p className="text-xl">{description}</p>
      </div>
      <SearchBar />
    </section>
  );
}
