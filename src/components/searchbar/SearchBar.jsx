import React from "react";

export default function SearchBar() {
  return (
    <div className="searchbar w-full mt-10">
      <div className="searchbar-inner h-12 flex lg:justify-between max-w-[1200px] w-full mx-auto">
        <input
          type="text"
          placeholder="Search for movies, shows, peoples."
          className="h-full md:max-w-[500px] lg:max-w-[90%] w-full px-4 outline-none"
          style={{ border: "1px solid #000" }}
        />
        <button
          style={{ border: "1px solid #000" }}
          className="bg-black text-white h-full px-10 flex justify-center
        items-center max-w-[10%] w-full"
        >
          search
        </button>
      </div>
    </div>
  );
}
