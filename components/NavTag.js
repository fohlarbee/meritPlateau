import Link from 'next/link'
import React from 'react'

const NavTag = ({href, tagName}) => {
  return (
    <Link
    className='text-[#441752] hover:text-[#6a3a7a] cursor-pointer'
     href={href}>
        {tagName}
        </Link>
  )
}

export default NavTag;