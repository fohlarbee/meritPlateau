import Image from "next/image";
import React from "react";

const Teacher = () => {
  return (
    <div className="container mx-auto py-20">
      <p className="text-base lg:text-xl font-medium text-gray-500 uppercase">
       Key Person
      </p>
      <p className="text-3xl lg:text-5xl font-semibold text-gray-500  mt-3">
      Meet our teachers
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-16 py-10 lg:py-20">
        <div className="flex flex-col gap-5 ">
          <Image src="/assets/jub.webp" alt="t1" width={250} height={250} />
          <p className="text-2xl font-semibold">Jubilant Agida</p>
          <div className="flex items-center gap-2">
            <p className="text-gray-500">
          Founder/President
          </p>
          </div>
       
        </div>
        <div className="flex flex-col gap-5 ">
          <Image width={250} height={250} src="/assets/Mak.webp" alt="v1" />
          <p className="text-2xl font-semibold">Mary Madaki</p>
          <div className="flex items-center gap-2">
            <p className="text-gray-500">
            Vice President - Operations
          </p>
          </div>
       
        </div>
        <div className="flex flex-col gap-5 ">
          <Image width={250} height={250} src="/assets/Sam.webp" alt="v1" />
          <p className="text-2xl font-semibold">Samuel Olaranrewaju</p>
          <div className="flex items-center gap-2">
            <p className="text-gray-500">
          Vice President - Partnership and Sponsorship
          </p>
          </div>
       
        </div>

        <div className="flex flex-col gap-5 ">
          <Image width={250} height={250} src="/assets/Azo.webp" alt="v1" />
          <p className="text-2xl font-semibold">Azonchi Sambo</p>
          <div className="flex items-center gap-2">
            <p className="text-gray-500">
          Vice President - Membership Engagement
          </p>
          </div>
       
        </div>
      </div>
    </div>
  );
};

export default Teacher;
