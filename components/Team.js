import { TeamData } from "../Data/TeamInfo";
import Image from "next/image";

const Team = () => {
  return (
    <div className=" mx-0 my-auto py-20">
      
      <h2 className="text-lg lg:text-xl  text-col-blk text-center font-headerFont font-bold mt-3 uppercase">
      Meet our team
      </h2>
      <p className="text-col-blk text-center font-bodyFont py-4 w-3/4 my-0 mx-auto">
        Our team is a passionate group of indiviuals dedicated to driving positive change in underpriviledged communities. Each member brings unique skills, experience, and commitment to advancing our mission. Together, we work tirelessly to create impactful programs that empower lives and foster sustainabile development. Collaboration and innovation are at the heart of everything we do. Get to know the people behind Merit Plateau and the work that makes a difference.
      </p>


      <div className=" mx-auto justify-center align-middle text-center grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-12 py-10 lg:py-20">

    
      {TeamData.map((data, id) => (
          <div key={id} className="flex flex-col gap-4 bg-col-grey rounded-xl py-10">
          <Image width={100} height={100} 
          src={data.image}
          alt={data.position}
          className=" mx-auto rounded-full object-cover"
        />

          <h3 className=" font-headerFont">{data.name}</h3>
          <h3 className="text-white bg-col-blk mx-5 rounded-md py-2 ">{data.position}</h3>


</div>

      ))}

      </div>
    </div>
  );
};

export default Team;
