import Link from "next/link";

const Hero = () => {
  return (
    <div className="mx-auto z-10">
       <div className="relative bg-[url('/assets/bgImg.webp')] bg-cover bg-no-repeat bg-center before:content-[''] before:absolute before:inset-0 before:bg-black/60 px-6 lg:px-16 py-12"> 
        
        <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-2 lg:mt-8 ">
          <div className="flex flex-col gap-6 lg:gap-4 mt-14 z-10">
            <h1 className="font-headerFont text-2xl text-center text-white md:text-4xl lg:text-4xl pb-8 w-full lg:w-1/2">
            Building up dreams in the midst of adversity
            </h1>

            <p className="font-bodyFont text-white text-xl w-full lg:w-3/5 italic">“Even in the face of hardships, challenges, and uncertainty, 
              the spirit of determination and hope fuels the pursuit of dreams.
              It is in adversity that dreams are tested and refined, 
              proving that perseverance can turn even the toughest circumstances into a foundation for greatness”.</p>
            <div className="flex ml-[60%] mb-10" >

            <Link href="/Signup"><button className="btn lg:btn-sm bg-[#441752] hover:bg-[#6a3a7a] text-white rounded-lg mr-1 border-none w-30 lg:w-24 capitalize">sign up</button></Link>
            <Link href="/SignIn"><button className="btn lg:btn-sm bg-col-grey hover:bg-[#6a3a7a] hover:text-col-grey text-purp-dark rounded-lg border-none w-30 lg:w-24 capitalize">sign in</button></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
