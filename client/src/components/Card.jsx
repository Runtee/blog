import React from "react";

export default function Card() {
  return (
    <div className="flex h-[27rem] w-[21rem] flex-col shadow-lg text-white shadow-gray-900">
      <div className="flex h-48">
        <img
          className="w-full h-full"
          src="assets/fernando-hernandez-JdoofvUDUwc-unsplash.jpg"
          alt=""
        />
      </div>
      <div className="p-6 flex flex-col">
        <h1 className="text-xl font-semibold mb-4">
          Using react js and sanity for a blog application
        </h1>
        <p className="text-gray-50 mb-4 text-sm">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that...
        </p>
        <div className="flex justify-between">
          <h4 className="text-gray-50">May 20th 2020</h4>
          <button className="font-semibold">Read more</button>
        </div>
      </div>
    </div>
  );
}
