import React from "react";

export default function Heading({ title, font }) {
  return (
    <section className="w-full pb-5">
      <div className="max-w-[1200px] w-full mx-auto">
        <h1 className="text-xl md:text-3xl font-bold">{title}</h1>
      </div>
    </section>
  );
}
