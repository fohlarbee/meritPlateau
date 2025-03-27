import Link from 'next/link'
import React from 'react'

const NavTag = ({href, tagName}) => {
  return (
    <Link
    className='text-text-col-blk hover:bg-purp-lighter cursor-pointer p-2 rounded-full'
     href={href}>
        {tagName}
        </Link>
  )
}

export default NavTag;