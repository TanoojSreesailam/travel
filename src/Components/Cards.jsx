/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'


function Cards({bg, text}) {
    return (
        <div className='relative mt-3'>
            <img className='w-full h-full object-cover' src={bg} alt="" />
            <div className='bg-zinc-900/35 w-full h-full top-0 left-0 absolute '>
                <h2 className='text-white font-bold text-xl left-2 bottom-1 absolute'>{text}</h2>
            </div>
        </div>
    )
}

export default Cards
