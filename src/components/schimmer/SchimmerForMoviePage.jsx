import React from "react";

export default function SchimmerForMoviePage() {
  return (
    <main className="w-full schimmer">
      <section className="movie-details w-full min-h-96 flex justify-center items-center px-5">
        <div className="sm:flex justify-between max-w-[1200px] w-full mx-auto">
          <div className="img max-w-[100%] h-96 sm:max-w-[250px] w-full">
            <div className="max-w-[100%] h-96 bg-[#eee] sm:max-w-[300px] w-full"></div>
          </div>
          <div className="description max-w-[100%] sm:max-w-[80%] w-full flex justify-around items-start flex-col pt-5 px-0 sm:px-5">
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

      <section className="bg-[#eee] max-w-[1200px] w-full h-[80vh] mx-auto mt-14"></section>
    </main>
  );
}
