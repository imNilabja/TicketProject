/* eslint-disable no-unused-vars */
import React from 'react'



function Navbar() {
  return (
    <div className='w-screen h-11 bg-purple-700 flex'>
      <div className='h-[100%] w-[15%] bg-yellow-300 flex justify-center items-center text-red-700 font-extrabold'>TicketSeller</div>
      <div className='h-[100%] w-[85%] bg-green-400 pr-[70px] flex'>
        <ul className='flex justify-end items-center text-white font-bold w-[100%] gap-5'>
          <li>Home</li>
          <li>Explore</li>
          <li>Buy</li>
          <li>Sell</li>
          <li>Reach Us</li>
          <li>About</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar