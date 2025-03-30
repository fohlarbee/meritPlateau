import Image from "next/image";
import React from "react";

const Values = () => {
  return (
    <div className="container mx-auto py-20">
      <h3 className=" text-3xl lg:text-5xl text-center mt-3 uppercase font-headerFont">
        Our Values
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-16 py-20">
        <div className="flex flex-col gap-5 items-center">
          <Image src="/assets/v1.svg" alt="v1" width={100} height={100} />
          <p className="text-2xl font-semibold">Speaking clubs</p>
          <p className="text-gray-500 text-center">
            In our school you will practice <br /> your speaking skills and just get <br /> a
            lot of positive emotions!
          </p>
        </div>
        <div className="flex flex-col gap-5 items-center">
          <Image src="/assets/v2.svg" alt="v1"  width={100} height={100} />
          <p className="text-2xl font-semibold">Quality control</p>
          <p className="text-gray-500 text-center">
            In our school you will practice <br /> your speaking skills and just get <br /> a
            lot of positive emotions!
          </p>
        </div> <div className="flex flex-col gap-5 items-center">
          <Image src="/assets/v3.svg" alt="v1"  width={100} height={100} />
          <p className="text-2xl font-semibold">Progress analysis</p>
          <p className="text-gray-500 text-center">
            In our school you will practice <br /> your speaking skills and just get <br /> a
            lot of positive emotions!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Values;
