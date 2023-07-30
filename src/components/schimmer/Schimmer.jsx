import React from "react";

export default function Schimmer() {
  return (
    <main className="w-full pt-10 px-5">
      <div className="max-w-[1200px] w-full rounded-lg h-14 mx-auto bg-[#eee]"></div>
      <div className="max-w-[1200px] w-full mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 mt-5">
        <div className="mx-2 h-64 bg-[#eee] rounded-lg"></div>
        <div className="mx-2 h-64 bg-[#eee] rounded-lg"></div>
        <div className="mx-2 h-64 bg-[#eee] hidden sm:block rounded-lg"></div>
        <div className="mx-2 h-64 bg-[#eee] hidden md:block rounded-lg"></div>
        <div className="mx-2 h-64 bg-[#eee] hidden lg:block rounded-lg"></div>
        <div className="mx-2 h-64 bg-[#eee] hidden xl:block rounded-lg"></div>
      </div>
    </main>
  );
}
