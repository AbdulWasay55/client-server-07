import React from 'react'
import Link from 'next/link'

const Nav = () => {
  return (
    <div>
      <div className='h-[50px] bg-[#336699] flex items-center justify-center text-white'>
        <ul className="font-medium text-[20px] flex gap-3 p-2" >
          <li className='hover:text-[#fdc921]'>
            <Link href={"/"}>
            Home
            </Link>
          </li>
          <li className='hover:text-[#fdc921]'>
            <Link href={"/Server-side"}>
            Server Side
            </Link>
          </li>
          <li className='hover:text-[#fdc921]'>
            <Link href={"/client-side"}>
            Client Side
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Nav