import React from "react";

export default function Footer() {
  return (
    <footer className="footer w-full bg-black text-white px-5 mt-20 py-20">
      <div className="footer-inner max-w-[1200px] w-full mx-auto md:flex justify-between items-center">
        <div className="logo">
          <h1 className="text-3xl font-bold">MovieHub</h1>
        </div>
        <nav>
          <ul className="md:flex mt-5 md:m-0">
            <li className=" mt-3 md:ml-5">About MoiveHub</li>
            <li className=" mt-3 md:ml-5">Contact Us</li>
            <li className=" mt-3 md:ml-5">Support Forums</li>
            <li className=" mt-3 md:ml-5">API</li>
            <li className=" mt-3 md:ml-5">System Status</li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
