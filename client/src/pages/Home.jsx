import React from "react";
import Header from "../components/Header";
import Pagination from "../components/Pagination";

export default function Home() {
  const list = [
    { key: 1, slug: "adkkd-ad" },
    { key: 2, slug: "adkkd-ad" },
    { key: 3, slug: "adkkd-ad" },
    { key: 4, slug: "adkkd-ad" },
    { key: 5, slug: "adkkd-ad" },
    { key: 6, slug: "adkkd-ad" },
  ];
  return (
    <>
      {/* <Navbar /> */}
      <section className=" pt-[72px]">
        <Header />
        <div className="flex flex-col h-56">
          <div className="p-10 flex basis-1/2">
            <h1 className="text-2xl font-medium">long established</h1>
            <p className="">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when look
            </p>
            <div className="flex justify-between">
              <h4 className="">May 20th 2020</h4>
              <button className="">Read more</button>
            </div>
          </div>
          <div className="flex basis-1/2">
            <img
              src="assets/adeolu-eletu-E7RLgUjjazc-unsplash.jpg"
              alt=""
              className="w-full h-full"
            />
          </div>
        </div>
      </section>
      {/* <Footer /> */}
    </>
  );
}
