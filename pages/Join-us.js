import Link from "next/link";
import Image from "next/image";
import { DefaultButtons } from "../components/Buttons";

export default function JoinUs() {
  return (
    <section className=" grid grid-cols-1 md:grid-cols-2 items-center align-middle md:gap-8 justify-center bg-[url('/assets/formBg1.webp')] bg-cover bg-no-repeat bg-center relative md:bg-none">
      
      <div className="h-full p-8">
        <Image className="h-full hidden md:block" width={700} height={700} alt="form background" src="/assets/formBg1.webp" />
      </div>


 <div className="flex flex-col items-center bg-white bg-no-repeat md:bg-transparent bg-opacity-75 p-8 ">
  <article className="py-4">
    <h1 className="text-xl md:text-2xl py-2">Ready to Turn Passion into Action?</h1>

    <p  className="text-lg md:text-xl py-2">
      Thank you for considering lending your time and talents to the World Merit Plateau mission! Volunteers are the <b>heartbeat</b> of our organisation, helping us amplify our impact and reach who need it most. <br /> <br /> We&apos;re looking for passionate individuals ready to commit their unique skills to a meaningful cause. By filling out this application, you are taking the first step toward becoming a vital part of our team. <br /><br /> Please be thorough in your responses. Your answers will help us match your skills, interests, and availability with our most urgent needs.
    </p>
  </article>
      <form className="lg:w-3/4">
      <Link href="/VolunteerForm">
      <DefaultButtons buttontext={"Be the Change. Join the Team"}/>
      </Link>
    
                    {/* Form elements */}
      </form>
      </div>
      
    </section>
  )
}
