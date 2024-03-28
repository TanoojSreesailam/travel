/* eslint-disable no-unused-vars */
import React from 'react'
import BoraBora from '../assets/borabora.jpg'
import BoraBora2 from '../assets/borabora2.jpg'
import Keywest from '../assets/keywest.jpg'
import Maldives from '../assets/maldives.jpg'
import Maldives2 from '../assets/maldives2.jpg'
import Maldives3 from '../assets/maldives3.jpg'

function Destinations() {
    return (
        <div className='max-w-[100vw] mx-auto py-16 px-4 text-center'>
            <h1 className='font-bold text-3xl'>All-inclusive Resorts</h1>
            <p className='text-xl'>On the Caribbeans Best Beaches</p>

            <div className='grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4'> 
                <img className='w-full h-full object-cover col-span-5 md:col-span-3 row-span-2' src={BoraBora} alt="/" />
                <img className='w-full h-full object-cover col-span-3 md:col-span-1' src={BoraBora2} alt="/" />
                <img className='w-full h-full object-cover col-span-2 md:col-span-1' src={Maldives} alt="/" />
                <img className='w-full h-full object-cover col-span-2 md:col-span-1' src={Maldives2} alt="/" />
                <img className='w-full h-full object-cover col-span-3 md:col-span-1' src={Keywest} alt="/" />
            </div>
        </div>
    )
}

export default Destinations
