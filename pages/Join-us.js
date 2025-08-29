import Link from "next/link";
import Image from "next/image";

export default function SignUp() {
  return (
    <section className=" grid grid-cols-1 md:grid-cols-2 items-center align-middle md:gap-8 justify-center bg-[url('/assets/formBg1.webp')] bg-cover bg-no-repeat bg-center relative md:bg-none">
      
      <div className="h-full p-8">
        <Image className="h-full hidden md:block" width={1500} height={1500} alt="form background" src="/assets/formBg1.webp" />
        {/* <img src="/assets/logo1.png"></img> */}
      </div>


 <div className="  bg-white bg-no-repeat md:bg-transparent bg-opacity-75 p-8 ">
      <form className="lg:w-3/4">
        <h2 className="text-xl lg:text-3xl font-headerFont py-2 my-6">Join us as a volunteer</h2>

                    {/* Form elements */}

        <div className="mb-6">
        <label htmlFor='name'>Name</label>
        <input className="block p-1  appearance-none border-b leading-tight focus:outline-none " 
        type='text' id='name' name='name' placeholder='Enter your full name'></input>
        </div>

        <div className="mb-6">
        <label htmlFor='email'>Email Address</label>
        <input className="block p-1  appearance-none border-b leading-tight focus:outline-none " 
        type='email' id='email' name='email' placeholder='Enter your email address'></input>
        </div>

        <div className="mb-6">
        <label htmlFor='password'>Password</label>
        <input className="block p-1  appearance-none border-b leading-tight focus:outline-none " 
        type='password' id='password' name='password' placeholder='Enter your Password'></input>
          </div>

        <div className='flex justify-between mb-6 '>
          <p> <input type='checkbox'></input> <span className="text-s">I agree to the terms and policy</span></p>
        
        </div>
          <button className=" bg-purp-dark my-3 text-white font-bold font-bodyFont rounded-xl px-16 py-2">Sign Up</button>


                {/* Google Alternative */}
          <p className="flex items-center mb-6">
          <span className="w-1/2 px-1"> <hr /> </span>
          <span>or</span>
          <span className="w-1/2 px-1"><hr /></span>
      </p>

      <div className="flex items-center  gap-20 border px-2 py-1 rounded-3xl mb-6">
        <Image src="/assets/google_icon.png " width={30} height={30} alt="google icon" /> <p className="font-medium font-bodyFont"> Sign in with Google </p>
      </div>


      <p className="text-center">Have an account? <Link href="/SignIn" className="text-col-gold">Sign in</Link> </p>
      </form>
      </div>
      
    </section>
  )
}
