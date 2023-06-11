import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/react.svg";

export default function Navbar() {
  const [hidden, setHidden] = useState(true);
  const [dropDown, setDropDown] = useState(true);

  function handleDropdown() {
    setDropDown((prev) => !dropDown);
  }

  function hid() {
    setHidden((prev) => !hidden);
  }
  return (
    <nav className="flex px-5 py-3 bg-gray-950 flex-col md:flex-row fixed shadow-gray-900 shadow-lg w-full z-10">
      <div className="flex justify-between w-full">
        <div className="flex items-center content-center">
          <img src={logo} alt="" className="w-7 h-7 mr-2" />
          <Link
            className="font-medium cursor-pointer text-xl text-gray-50"
            to={"/"}
          >
            Noni
          </Link>
        </div>
        <div className="flex items-center text-white flex-wrap">
          <ul className="hidden md:flex items-center cursor-pointer font-medium">
            <li className="mr-4">Home</li>
            <li className="mr-4">About</li>
            <li className="mr-4">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    className="w-5 h-5 text-gray-50"
                    ariaHidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
                <input
                  type="text"
                  class="block w-full p-2 pl-10 text-sm text-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 bg-transparent"
                  placeholder="Search..."
                />
              </div>
            </li>
          </ul>
          
          <button className="bg-blue-500 font-medium py-2 px-5 rounded-lg mr-4 md:mr-0">Articles</button>
          <button
            data-collapse-toggle="navbar-cta"
            type="button"
            class="inline-flex items-center p-2 text-sm text-gray-50 rounded-lg md:hidden hover:bg-slate-600 focus:outline-none focus:ring-2"
            aria-controls="navbar-cta"
            aria-expanded="false"
            onClick={hid}
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      <ul className={`cursor-pointer text-white p-2 ${hidden && "hidden"}`}>
        <li className="mr-4 pb-2 px-2 hover:bg-slate-600">Home</li>
        <li className="mr-4 pb-2 px-2 hover:bg-slate-600">About</li>
        <li className="mr-4 pb-2 px-2">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-50"
                ariaHidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
            <input
              type="text"
              class="block w-full p-2 pl-10 text-sm text-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 bg-transparent"
              placeholder="Search..."
            />
          </div>
        </li>
      </ul>
    </nav>
  );
}
