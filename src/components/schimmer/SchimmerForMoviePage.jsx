import React from "react";

export default function SchimmerForMoviePage() {
  return (
    <main className="w-full schimmer pb-28">
      <section className="movie-details max-w-[1200px] w-full h-96 mx-auto flex justify-center items-center">
        <div className="movie-details-inner flex justify-between max-w-[1200px] w-full mx-auto">
          <div className="img max-w-[20%] w-full">
            <div className="schimmer-card h-80 bg-[#eee] rounded-lg"></div>
          </div>
          <div className="description max-w-[80%] w-full flex justify-around items-start flex-col px-5">
            <div className="title w-full ">
              <div className="h-10 bg-[#eee] w-full"></div>
              <div className="bg-[#eee] my-2 h-4 w-full"></div>
              <div className="bg-[#eee] h-4 w-full"> </div>
            </div>
            <div className="overview w-full">
              <div className="bg-[#eee] h-6 w-full mb-2"> </div>
              <div className="bg-[#eee] h-24 w-full"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#eee] max-w-[1200px] w-full h-[70vh] mx-auto mt-10"></section>
    </main>
  );
}
