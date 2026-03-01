import React from 'react'
import { PiStarFourFill } from "react-icons/pi";
import {NavLink} from "react-router-dom" 


export default function Navbar() {
  return (
    <nav className='flex justify-between px-10 py-5 shadow-xs'>
        <div className='flex items-center gap-3 font-bold hover:text-green-500 duration-500'>
            <span className='p-2 rounded-md bg-green-400 hover:bg-green-500 duration-300'>
                <PiStarFourFill className='text-black '/>
            </span>
                 AI Learn
        </div>
        <div className='flex gap-6 font-semibold text-gray-600 items-center'>
            <a className='navlink'>Features</a>
            <a className='navlink'>Pricing</a>
            <a className='navlink'>About</a>
            <button className='bg-green-400 ml-5 p-1.5 px-3 rounded-md hover:bg-green-500 text-black hover:text-white duration-300'>Sign up</button>
        </div>

    </nav>
  )
}
