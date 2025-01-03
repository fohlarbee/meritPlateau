"use client"
import Image from 'next/image'
import React from 'react'
import NavTag from './NavTag'
import { TagData } from '../Data/TagData'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  return (
  <nav className='flex flex-row justify-between w-full items-center '>
        <div className="flex-row justify-center items-center gap-5 shadow-lg border border-opacity-5 rounded-xl bg-[#fff5f1]">
            <Image src="/meritlogo.svg" alt="logo"  width={50} height={50} className='rounded-full p-1'/>
        </div>
        <div className="flex-row justify-center  lg:justify-between items-center gap-5 hidden md:flex ">
               {TagData.map((t, i) => (
                <NavTag href={t.href} tagName={t.tagName} key={i}/>
               ))}
        </div>
        <div className="">
            <button className='btn hidden md:flex bg-[#441752] text-[#fff] border-none hover:bg-[#6a3a7a] hover:text-white capitalize rounded-full'>
                    Get Started
            </button>
            <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className='btn flex md:hidden bg-[#eee] text-[#fff] border-none hover:bg-[#6a3a7a] hover:text-white capitalize rounded-full'>
                    <Image src="/assets/menu.svg" alt="menu" className='text-[#441752]' width={20} height={20}/>
            </button>
        </div>
        {isMenuOpen && (
            <div className='flex flex-col gap-5 absolute top-10 right-0 text-center md:container bg-[#fff5f1] rounded-3xl w-full px-6 lg:px-16 py-10'>
              <button className='absolute top-2 right-5 bg-[#eee] py-2 px-2 rounded-full border-none hover:bg-[#fff]'>
                <Image 
                src="/assets/close.svg" 
                alt="close" 
                width={20} 
                height={20} 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className='text-[#441752]'
                />
              </button>
              {TagData.map((t, i) => (
                <NavTag href={t.href} tagName={t.tagName} key={i}/>
               ))}
            </div>
            
        )}
    </nav>
  )
}

export default Navbar