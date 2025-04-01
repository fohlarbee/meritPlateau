import Image from "next/image";
import React from "react";

const Team = () => {
  return (
    <div className="container mx-auto py-20">
      
      <h2 className="text-lg lg:text-xl  text-col-blk text-center font-headerFont font-bold mt-3 uppercase">
      Meet our team
      </h2>
      <p className="text-col-grey text-center font-bodyFont py-4 w-3/4 my-0 mx-auto">
        Our team is a passionate group of indiviuals dedicated to driving positive change in underpriviledged communities. Each member brings unique skills, experience, and commitment to advancing our mission. Together, we work tirelessly to create impactful programs that empower lives and foster sustainabile development. Collaboration and innovation are at the heart of everything we do. Get to know the people behind Merit Plateau and the work that makes a difference.
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

export default Team;
