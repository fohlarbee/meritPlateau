import React from "react";
import Navbar from "./Navbar";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="mx-auto">
       <div className="bg-[url('/assets/bg1.webp')] bg-cover bg-no-repeat bg-center bg-blend-lighten px-6 lg:px-16 py-10"> {/* #ECD0FF */}
        <Navbar />
        <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-2 mt-20 lg:mt-8">
          <div className="flex flex-col gap-2 lg:gap-8">
            <h1 className=" text-2xl text-white sm:text-4xl md:text-5xl lg:text-6xl font-medium">
             Merit Plateau
            </h1>

            <p className="w-20 h-4 bg-[#FFD700] rounded-l" ></p>

            <p className="text-sm sm:text-base lg:text-lg text-white">
              Building up dreams in the midst of adversity.
            </p>
            <button className="btn btn-sm lg:btn-lg bg-[#441752] hover:bg-[#6a3a7a] text-white rounded-full border-none w-36 lg:w-44 capitalize">Join Us Today</button>
          </div>
          {/* <Image src="/assets/hero.png" alt="" width={470} height={470} /> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
