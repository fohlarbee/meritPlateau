import Image from 'next/image'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import NavTag from './NavTag'
import Link from 'next/link'
import { TagData } from '../Data/TagData'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const [activeLink, setActiveLink] = useState('');

  useEffect(() => {
    setActiveLink(pathname);
  }, [pathname]);

  const navItems = [
    { name: 'Home', path: '/'},
    { name: 'AboutUs', path: '/AboutUs'},
    { name: 'Media', path: '/Media'},
    { name: 'Contact', path: '/Contact'},
    { name: 'JoinUs', path: '/Join-us'},
  ]
  return (
  <nav className=' flex flex-row justify-around w-full items-center py-2'>
    
        <div className="flex-row justify-center items-center gap-5 rounded-xl">
            <Image src="/logo-b.svg" alt="logo"  width={70} height={70} className=' p-1 w-2/4'/>
        </div>

        <Link href="/Donate" className='btn hidden md:flex bg-purp-dark text-[#fff] border-none font-bodyFont hover:bg-purp-light capitalize rounded px-8'>
                    donate
        </Link>
        <div className="flex-row justify-center font-bodyFont lg:justify-between items-center gap-5 text-xl hidden md:flex">
               {TagData.map((t, i) => (
                <NavTag href={t.href} tagName={t.tagName} key={i}
                isActive={activeLink === t.href}
                onClick={() => setActiveLink(t.href)}
                />
               ))}
        </div>
        <div className="">
          
            <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className='btn flex md:hidden bg-[#eee] text-[#fff] border-none hover:bg-purp-light hover:text-white focus:bg-purp-light capitalize rounded-full'>
                    <Image src="/assets/menu.svg" alt="menu" className='text-col-blk' width={20} height={20}/>
            </button>
        </div>
        {isMenuOpen && (
            <div className=' flex flex-col gap-5 absolute top-0 right-0 text-center md:container bg-[#fff5f1] rounded-3xl w-full px-6 lg:px-16 py-10 z-20'>
              <button className='absolute top-2 right-5 bg-[#eee] py-2 px-2 rounded-full border-none hover:bg-[#fff]'>
                <Image 
                src="/assets/close.svg" 
                alt="close" 
                width={20} 
                height={20} 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className='text-text-col-blk'
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