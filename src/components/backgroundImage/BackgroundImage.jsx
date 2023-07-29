import React from "react";
import "./sass/style.css";
import Heading from "../heading/Heading";
import { backgroubd_poster_url } from "../../utils/constants";

export default function BackgroundImage({ backdrop_path, title }) {
  return (
    <section className="background-image w-full h-[80vh] mt-10">
      <div className="img max-w-[1200px] w-full mx-auto">
        <img
          className="w-[1200px] h-full "
          src={backgroubd_poster_url + backdrop_path}
          alt={title}
        />
      </div>
    </section>
  );
}
