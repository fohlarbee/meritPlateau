import React from "react";
import Navbar from "./Navbar";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="mx-auto">
      <Navbar />
       <div className="bg-[url('/bgimg.webp')] bg-cover bg-no-repeat bg-center bg-blend-lighten px-6 lg:px-16 py-5"> {/* #ECD0FF */}
        
        <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-2 lg:mt-8 ">
          <div className="flex flex-col gap-4 lg:gap-4 mt-14 ">
            <h1 className="font-headerFont text-xl text-white sm:text-2xl md:text-4xl lg:text-4xl pb-8 w-1/2">
            Building up dreams in the midst of adversity
            </h1>

            <p className="font-bodyFont text-white text-xl w-3/5 italic">“Even in the face of hardships, challenges, and uncertainty, 
              the spirit of determination and hope fuels the pursuit of dreams.
              It is in adversity that dreams are tested and refined, 
              proving that perseverance can turn even the toughest circumstances into a foundation for greatness”.</p>
            <div className="flex ml-[60%] mb-10" >

            <button className="btn lg:btn-sm bg-[#441752] hover:bg-[#6a3a7a] text-white rounded-lg mr-1 border-none w-30 lg:w-24 capitalize">sign up</button>
            <button className="btn lg:btn-sm bg-col-grey hover:bg-[#6a3a7a] text-purp-dark rounded-lg border-none w-30 lg:w-24 capitalize">sign in</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
