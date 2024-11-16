/* eslint-disable no-unused-vars */
import React from 'react'



function Navbar() {
  return (
    <div className='w-screen h-11 bg-purple-700 flex'>
      <div className='h-[100%] w-[15%] bg-yellow-300 flex justify-center items-center text-red-700 font-extrabold'>TicketSeller</div>
      <div className='h-[100%] w-[85%] bg-green-400 pr-[70px] py-2 flex'>
        <ul className='flex justify-end items-center text-white font-extrabold w-[100%] gap-7 mx-6 '>
          <button>Home</button>
          <button>Explore</button>
          <button>Buy</button>
          <button>Sell</button>
          <button>Reach Us</button>
          <button>About</button>
        </ul>
        <div className="button flex gap-3">
        <button className='border border-black rounded h-7 w-16 flex justify-center items-center hover:bg-orange-400 hover:font-semibold '>Login</button>
        <button className='border border-black rounded h-7 w-16 flex justify-center items-center hover:bg-orange-400 hover:font-semibold'>Signup</button>
        </div>
        
      </div>
    </div>
  )
}

export default Navbar