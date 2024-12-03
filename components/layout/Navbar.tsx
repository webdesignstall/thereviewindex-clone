import React from 'react'
import { Dark } from '../dark'
import { MobileNavbar } from './NavItem'



export default function Navbar() {
  return (
    <div className='flex justify-between items-center dark:bg-neutral-900 p-4'>
      <div className='flex md:hidden'>
        <MobileNavbar />
      </div>
      <div className='text-center lg:w-full'>
        <p className='text-sm dark:text-white'>You are viewing demo data</p>
      </div>
      {/* <div className='lg:hidden'></div> */}
    </div>
  )
}
