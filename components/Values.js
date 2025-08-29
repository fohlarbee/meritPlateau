
const Values = () => {
  return (
    <div className="container mx-auto py-16">
      <h3 className="font-semibold text-col-blk lg:mt-3 uppercase text-center "> <span className="bg-col-gold mx-4 w-4 h-4 inline-block rounded-full
       "></span>
        our values
      </h3>

      <p className=' font-bodyFont text-col-blk text-xl py-4 my-8 mx-auto text-center lg:w-2/3'>
          At Merit Plateau, our values guide everything we do. We are commited integrity, compassion, inclusivity, and sustainability ensuring every action we take uplifts and empowers the communities we serve.
      </p>
      <div className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 py-20">
        <div className="flex flex-col gap-5 bg-col-grey rounded-lg ">
          
          <h4 className="text-xl font-bold text-white bg-purp-dark mt-8 p-2 w-3/4   font-headerFont uppercase">  <span className="bg-col-gold mr-2 w-4 h-4 inline-block rounded-full"></span> no discrimination</h4>
          <p className="text-col-blk font-bodyFont text-lg lg:text-xl py-8 px-4 ">
            No discrimination whatsoever is tolerated agianst anyone of a particular race, tribe, religion, or gender
          </p>
        </div>
        <div className="flex flex-col gap-5 bg-col-grey rounded-lg ">
     
          <h4 className="text-xl font-bold text-white bg-purp-dark mt-8 p-2 w-3/4 font-headerFont uppercase"><span className="bg-col-gold mr-2 w-4 h-4 inline-block rounded-full"></span>transparency</h4>
          <p className="text-col-blk font-bodyFont text-lg lg:text-xl py-8 px-4 ">
            All dealings with the council are done with no shroud of secrecy or shadiness. This is to ensure the sustainance of trust of council members and partners.
          </p>
        </div> <div className="flex flex-col gap-5 bg-col-grey rounded-lg ">

          <h4 className="text-xl font-bold text-white bg-purp-dark mt-8 p-2 w-3/4 font-headerFont uppercase"><span className="bg-col-gold mr-2 w-4 h-4 inline-block rounded-full"></span> community</h4>
          <p className="text-col-blk font-bodyFont text-lg lg:text-xl py-8 px-4 ">
            We stand united through challenges and triumphs, inspiring each other to excel while fostering a culture of accountability.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Values;
