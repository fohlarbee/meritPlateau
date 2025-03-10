import React from "react";
import Navbar from "./Navbar";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="container mx-auto my-10 ">
      <div className="bg-[#fff5f1] px-6 lg:px-16 py-10 rounded-3xl">
        <Navbar />
        <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-5 mt-14 lg:mt-8">
          <div className="flex flex-col gap-5 lg:gap-10">
            <p className=" text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-medium">
              A Unique approach <br className="lg:flex hidden"/> to learning foreign <br className="lg:flex hidden" /> languages
              online
            </p>
            <p className="text-sm sm:text-base lg:text-lg text-gray-500">
              Learn at your own pace, with lifetime <br  className="lg:flex hidden"/> access on mobile and desktop
            </p>
            <button className="btn btn-sm lg:btn-lg bg-[#441752] hover:bg-[#6a3a7a] text-white rounded-full border-none w-36 lg:w-44 capitalize">Get Started</button>
          </div>
          <Image src="/assets/hero.png" alt="" width={470} height={470} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
