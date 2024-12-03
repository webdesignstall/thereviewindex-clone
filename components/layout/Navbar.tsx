import React from 'react'
import { Dark } from '../dark'
import { NavbarItem } from './NavItem'


export default function Navbar() {
  return (
    <div>
      <div className='hidden'>
        <NavbarItem />
      </div>
      <div className='dark:bg-neutral-900 flex justify-center items-center p-4'>
        <p className='text-sm dark:text-white text-black flex flex-1 justify-center text'>You are viewing demo data</p>
      </div>
    </div>
  )
}
