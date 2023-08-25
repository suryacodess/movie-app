import React, { useEffect, useState } from "react";
import { getData } from "../../utils/api";
import { cast_img } from "../../utils/constants";

export default function People() {
  const [popularPeople, setPopularPeople] = useState([]);

  const getPeople = () => {
    getData("person/popular")
      .then((result) => {
        setPopularPeople(result?.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getPeople();
  }, []);

  return (
    <main className="w-full mt-10">
      <div className="max-w-[1200px] w-full mx-auto grid grid-cols-4 gap-10 ">
        {popularPeople?.map((people) => {
          return (
            <div
              key={people.id}
              className="w-full flex justify-center items-center flex-col"
            >
              <div>
                <img
                  className="w-full h-full"
                  src={cast_img + people.profile_path}
                  alt=""
                />
              </div>
              <div>
                <h5 className="font-bold pt-5">{people?.name}</h5>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}
