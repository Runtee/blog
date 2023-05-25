function Header() {
  return (
    <div className="px-12 grid grid-cols-1 md:grid-cols-2 gap-2 w-full lg:h-[500px] sm:h-[250px] md:h-[350px] bg-[#c7d1d6]">
      <div className=" flex text-black md:basis-1/2 px-3 py-2 flex-col justify-center">
        <h1 className="text-2xl font-light mb-5 md:text-4xl lg:text-7xl">
          Explore the Possibilities
        </h1>
        <h1 className="text-base md:text-xl font-normal mb-5 font-roboto">
          Welcome to the personal blog of Nonso. I love to code, read and also
          write about programming and tech related articles.
        </h1>
        <h1 className="text-base md:text-xl font-normal">
          {" "}
          Follow me on my socials{" "}
        </h1>
      
      </div>
      <img
        src={"assets/cookie-the-pom-gySMaocSdqs-unsplash.jpg"}
        alt=""
        className=" w-full h-full md:basis-1/2"
        fill
      />
    </div>
  );
}

export default Header;
