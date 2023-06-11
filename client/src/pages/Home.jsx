import React from "react";
import BigCard from "../components/BigCard";
import Card from "../components/Card";
import Footer from "../components/Footer";
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
        <main className="px-20 py-10">
          <div className="pb-10">
            <BigCard />
          </div>
          <div className="mb-10">
            <Card />
          </div>
          <div className="mb-5">
            <div className="flex w-full h-[34rem] bg-blue-50">
              <div className="flex basis-1/2 flex-col px-24 py-40">
                <h1 className="text-5xl mb-5 font-bold">What is Lorem Ipsum?</h1>
                <p className="text-gray-700 text-xl">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution...
                </p>
              </div>
              <div className="flex basis-1/2">
                <img className="h-full w-full" src="assets/helloque.jpg" alt=""/>
              </div>
            </div>
          </div>
          <div className="relative flex pb-5">
            <button className="bg-blue-600 py-1 px-5 rounded shadow-sm absolute right-0 text-white font-bold text-center">See more</button>
          </div>
        </main>
      </section>
      <Footer />
    </>
  );
}
