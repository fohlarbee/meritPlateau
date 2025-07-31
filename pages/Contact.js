import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SocialLinks from '../components/socialLinks'

export default function Contact() {
  return (
    <section className='container my-4'>
        <Navbar />
        <article className='grid md:grid-cols-2 grid-cols-1 justify-between gap-12 bg-purp-dark text-white py-12 px-20 mb-20'>

          {/* Left side */}
          <aside>
        <h3 className="font-semibold mt-3 uppercase">  <span className="bg-col-gold w-4 h-4 mx-2  inline-block rounded-full"></span>
           contact us
       </h3>

       <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl py-4">
        We want to hear from you
       </h2>

       <p className="text-md sm:text-lg md:text-xl py-4">
          Your voice matters to us! Whether you have questions, feedback, or ideas, we're here to listen. reach out to us for inquiries, collaborations, or to learn more about our work. Together, we can make a greater impact. Let's connect and make meaningful change. 
       </p>
          </aside>

          {/* Right side */}

          <aside>
            <h3 className="text-lg py-2"> Talk to Us!</h3>
            <span className="pr-4">+234 7034-6300-34</span>
            <span className="">contact@meritplateau.org</span>

            <hr className="w-3/5" />

            <h3 className="py-4">Office Address</h3>
            <p> 87 JD Gomwalk way, Jos, Plateau state.</p>

            <SocialLinks />
          </aside>
        

        </article>

        <article  className="mb-24">
        <form className="">
         <label htmlFor='name'>Full Name</label>
          <input className="block p-2 shadow appearance-none border border-purp-dark leading-tight focus:outline-none rounded-md" 
        type='email' id='email' name='email' placeholder='Your Full Name '></input>

        <label htmlFor='email'>Email Address</label>
        <input className="block p-2 shadow appearance-none border border-purp-dark  leading-tight focus:outline-none rounded-md" 
        type='email' id='email' name='email' placeholder='Enter your email address'></input>
        </form>

        </article>
        

        <Footer />
    </section>
  )
}
