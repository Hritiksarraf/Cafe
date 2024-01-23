import React from 'react'
import Logo from "../../assets/food-logo.png"
import {FaCartShopping} from "react-icons/fa6"
import DarkMode from './DarkMode'

export default function Navbar() {
  return (
    <div className='shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200'>
        <div className='container py-3 sm:py-0'>
            <div className=' flex justify-between items-center justify-center '>
                <div>
                    <a href="#" className='flex items-center gap-2 text-2xl sm:text-3xl font-bold'>
                        <img src={Logo} alt="" className='w-10' />
                        X.Foodie
                    </a>
                </div>
                <div className='flex items-center gap-4'>
                    <div>
                        <DarkMode/>
                    </div>
                    <ul className='flex gap-4 hidden sm:flex'>
                        <li>
                            <a href="#" className='inline-block p-4 hover:text-primary'>HOME</a>
                        </li>
                        <li>
                            <a href="#" className='inline-block p-4 hover:text-primary'>CONTACTS</a>
                        </li>
                        <li>
                            <a href="#" className='inline-block p-4 hover:text-primary'>ABOUT</a>
                        </li>
                    </ul>
                    <button className='flex items-center gap-2 text-white bg-gradient-to-r  from-primary to-secondary py-1 px-4 rounded-full sm:hidden  hover:scale-105'>Order
                    <FaCartShopping className='text-xl text-white drop-shadow-sm cursor-pointer'/>
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}
