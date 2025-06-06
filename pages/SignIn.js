import Link from "next/link";
import { FaGoogle } from "react-icons/fa6";


export default function SignIn() {
  return (
    <section className=' grid lg:grid-cols-2 items-center align-middle justify-center gap-20 p-12'>
      <div className="h-full">
  

        <img src="/assets/formBg1.webp"></img>
        {/* <img src="/assets/logo1.png"></img> */}
      </div>


      <form className="lg:w-3/4">
        <h2 className="text-xl lg:text-3xl font-headerFont py-2">Welcome back!</h2>
        <p className="text-sm lg:text-lg pb-12">Enter your credentials to access your account</p>

                    {/* Form elements */}
        <div className="mb-6">
        <label htmlFor='email'>Email Address</label>
        <input className="block p-1 shadow appearance-none border w-full leading-tight focus:outline-none rounded-lg" 
        type='email' id='email' name='email' placeholder='Enter your email address'></input>
        </div>

        <div className="mb-6">
        <label htmlFor='password'>Password</label>
        <input className="block p-1 shadow appearance-none border w-full leading-tight focus:outline-none rounded-lg" 
        type='password' id='password' name='password' placeholder='Enter your Password'></input>
          </div>

        <div className='flex justify-between mb-6 '>
          <p> <input type='checkbox'></input> <span className="text-s">Remember for 30 days</span></p>
          <p className="text-col-gold"> Forgot password?</p>
        </div>
          <button className=" bg-purp-dark w-full my-3 text-white font-bold font-bodyFont rounded-xl px-16 py-2">Log in</button>


                {/* Google Alternative */}
          <p className="flex items-center mb-6">
          <span className=""></span>
          <span>or</span>
          <span className=""></span>
      </p>

      <div className="flex items-center  gap-20 border px-2 py-1 rounded-3xl mb-6">
        <FaGoogle></FaGoogle> <p className="font-medium font-bodyFont"> Sign in with Google </p>
      </div>


      <p className="text-center">Dont have an account? <Link href="/Signup" className="text-col-gold">Sign up</Link> </p>
      </form>
      
    </section>
  )
}
