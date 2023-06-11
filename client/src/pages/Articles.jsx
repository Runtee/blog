import React from "react";
import Card from "../components/Card";
import Footer from "../components/Footer";

export default function Articles() {
  return (
    <section className=" pt-[90px] px-20 bg-gray-950">
      <div className="flex font-bold mb-5 text-white">
        <h2 className="text-2xl mr-2">All articles</h2>
        <h2 className="-mt-3 text-2xl">__</h2>
      </div>
      <div className="relative">
        <div className="flex flex-wrap justify-between relative mb-5">
          {[1, 2, 2, 3, 45, 1].map((element) => {
            return (
              <div className="pr-3 pb-5">
                <Card />
              </div>
            );
          })}
        </div>

      <div className="relative p-5 m-5">
      <div className="absolute right-0 bottom-0">
          <div className="flex">
            <button className="bg-blue-600 py-1 px-5 rounded inline shadow-sm text-white font-bold text-center">
              top
            </button>
          </div>
          <div>
            {" "}
            <button className="bg-blue-600 py-1 px-5 rounded shadow-sm text-white font-bold text-center">
              See more
            </button>
          </div>
        </div>
      </div>
      </div>
      <Footer/>
    </section>
  );
}
