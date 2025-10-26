"use client";
import Link from 'next/link'

const NavTag = ({href, tagName, isActive, onClick}) => {


  //base and conditional classes

  const baseClasses = 'text-text-col-blk cursor-pointer rounded-full p-3 transition-colors';
  const activeClasses = 'bg-purp-light text-white '
  const inactiveClasses = 'text-text-col-blk hover:bg-purp-lighter hover:text-white'

  return (
    <Link href={href}
    onClick={onClick}
    className={`${baseClasses} ${isActive 
      ? activeClasses 
      : inactiveClasses
    }`}
     >
      
        {tagName}
        </Link>
  )
}

export default NavTag;