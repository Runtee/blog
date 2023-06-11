import React from "react";

export default function BigCard() {
  return (
    <div className="flex h-64 relative shadow-xl border-2 rounded-md">
      <div className="p-12 flex basis-3/5 flex-col">
        <h1 className="text-3xl font-semibold mb-6">long established</h1>
        <p className="text-gray-700 mb-6">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that...
        </p>
        <div className="flex justify-between">
          <h4 className="text-gray-700">May 20th 2020</h4>
          <button className="font-semibold">Read more</button>
        </div>
      </div>
      <div className="flex basis-2/5">
        <img
          src="assets/adeolu-eletu-E7RLgUjjazc-unsplash.jpg"
          alt=""
          className="w-full h-full"
        />
      </div>
    </div>
  );
}
