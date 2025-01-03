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
          <Image src="/meritlogo.svg" alt="t1" width={250} height={250} />
          <p className="text-2xl font-semibold">Christian Howard</p>
          <div className="flex items-center gap-2">
          <Image src="/assets/italy.svg" width={45} height={45} alt="itersfgjds" />
            <p className="text-gray-500">
          Italian teacher
          </p>
          </div>
       
        </div>
        <div className="flex flex-col gap-5 ">
          <Image width={250} height={250} src="/meritlogo.svg" alt="v1" />
          <p className="text-2xl font-semibold">Sandra Wilson</p>
          <div className="flex items-center gap-2">
            <Image width={45} height={45} src="/assets/spain.svg" alt="itersfgjds" />
            <p className="text-gray-500">
            Spanish teacher
          </p>
          </div>
       
        </div>
        <div className="flex flex-col gap-5 ">
          <Image width={250} height={250} src="/meritlogo.svg" alt="v1" />
          <p className="text-2xl font-semibold">Jimmy Cooper</p>
          <div className="flex items-center gap-2">
            <Image src="/assets/uk.svg" alt="itersfgjds" width={45} height={45} />
            <p className="text-gray-500">
          English teacher
          </p>
          </div>
       
        </div>
      </div>
    </div>
  );
};

export default Teacher;
