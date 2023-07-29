import React from "react";

export default function Schimmer() {
  return (
    <main className="w-full schimmer pt-10">
      <div className="heading max-w-[1200px] w-full rounded-lg h-14 mx-auto bg-[#eee]"></div>
      <div className="schimmer-inner max-w-[1200px] w-full mx-auto grid grid-cols-6 mt-5 gap-5">
        {Array(20)
          .fill("")
          .map(() => {
            return (
              <div
                key={Math.random()}
                className="schimmer-card w-[280px]m-2 h-64 bg-[#eee] rounded-lg"
              ></div>
            );
          })}
      </div>
    </main>
  );
}
