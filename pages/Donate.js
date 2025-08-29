import React from 'react'
import Navbar from '../components/Navbar'

export default function Donate() {
  return (
    
    <section className='my-4'>
        <Navbar />
        <article className='bg-purp-dark py-20 w-3/4 my-1 mx-auto text-white'>
        
        <h3 className="font-semibold mt-3 uppercase text-center"> <span className="bg-col-gold mx-4 w-4 h-4 inline-block rounded-full
       "></span>
        make a donation
      </h3>

      <div className="text-center">
      
          <ul className='flex gap-10 text-xl justify-center my-4'>
            <li className='border-2 border-col-gold p-2 rounded-xl hover:bg-col-gold hover:cursor-pointer'><p><span className=''>N</span>10,000</p></li>
            <li className='border-2 border-col-gold p-2 rounded-xl hover:bg-col-gold hover:cursor-pointer'><p><span className=''>N</span>20,000</p></li>
            <li className='border-2 border-col-gold p-2 rounded-xl hover:bg-col-gold hover:cursor-pointer'><p><span className=''>N</span>30,000</p></li>
            <li className='border-2 border-col-gold p-2 rounded-xl hover:bg-col-gold hover:cursor-pointer'><p><span className=''>N</span>40,000</p></li>
            <li className='border-2 border-col-gold p-2 rounded-xl hover:bg-col-gold hover:cursor-pointer'><p><span className=''>N</span>50,000</p></li> 
            
          </ul>

        <p className='capitalize text-2xl my-4'>or</p>
      </div>
      

      <form className='grid justify-center grid-cols-2 w-3/4 my-0 mx-auto gap-10'>
        <input className="grid-[2fr] p-2 text-center shadow appearance-none border leading-tight focus:outline-none rounded-lg bg-inherit border-col-gold" 
        type='text' placeholder='Enter other amount'></input>

      <input className=" p-2 text-center shadow appearance-none border leading-tight focus:outline-none rounded-lg bg-inherit border-col-gold" 
        type='text' placeholder='First Name'></input>

       <input className=" p-2 text-center shadow appearance-none border leading-tight focus:outline-none rounded-lg bg-inherit border-col-gold" 
        type='text' placeholder='Last Name'></input>

        <input className=" p-2 text-center shadow appearance-none border leading-tight focus:outline-none rounded-lg bg-inherit border-col-gold" 
        type='text' placeholder='Email Address'></input>

       <input className=" p-2 text-center shadow appearance-none border leading-tight focus:outline-none rounded-lg bg-inherit border-col-gold" 
        type='text' placeholder='Phone Number'></input>

        <button>donate now</button>

      </form>


        </article>
    </section>
  )
}
