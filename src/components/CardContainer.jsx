/* eslint-disable no-unused-vars */
import React from 'react'
import Card from './Card'

function CardContainer() {
    return (
        <div className="flex w-[40%] h-[200px] mx-auto mt-10 justify-evenly items-center">
            <Card content="Buy"/>
            <Card content="Sell"/>
            <Card content="Explore"/>
        </div>
    )
}

export default CardContainer