/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

function Card(props) {
  return (
    <button className=' flex h-[110px] w-[150px] rounded-xl border border-black justify-center items-center font-bold text-xl hover:bg-yellow-400'>
      {props.content}
    </button>
  )
}

export default Card