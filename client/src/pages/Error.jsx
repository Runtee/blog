import React from "react";
// import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Error() {
  return (
    <div>
      <Navbar />
      <div className="pb-10 p-10 md:p-16 lg:p-24 h-96">
        <h1 className="text-3xl">404: Not Found</h1>
      </div>
      {/* <Footer /> */}
    </div>
  );
}
