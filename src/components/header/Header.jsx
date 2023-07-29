import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="flex justify-between items-center h-20 w-full px-5">
      <div className="header-inner max-w-[1200px] w-full h-full flex justify-between items-center mx-auto">
        <div className="logo">
          <h1 className="text-3xl font-bold">MovieHub</h1>
        </div>
        <nav className="menu hidden md:block">
          <ul className="flex">
            <li className="list-none ml-5 cursor-pointer">
              <Link to="/">Home</Link>
            </li>
            <li className="list-none ml-5 cursor-pointer">
              <Link to="/shows">Tv Shows</Link>
            </li>
            <li className="list-none ml-5 cursor-pointer">
              <Link to="/people">Poeple</Link>
            </li>
            <li className="list-none ml-5 cursor-pointer">
              <Link to="/more">More</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
