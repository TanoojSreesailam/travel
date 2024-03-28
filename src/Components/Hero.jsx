/* eslint-disable no-unused-vars */
import React from 'react';
import bgVid from "../assets/beachVid.mp4";
import { CiSearch } from "react-icons/ci";

function Hero() {
    return (
        <div className='w-full h-screen relative'>
            <video className='w-full h-full object-cover' src={bgVid} autoPlay loop muted/>
            {/* overlay */}
            <div className="absolute bg-zinc-900/50 w-full h-full top-0 left-0"></div>

            <div className='absolute text-white top-0 flex flex-col justify-center items-center w-full h-full  text-center p-4'>

                <h1 className='text-4xl font-bold my-2'>First Class Travel</h1>
                <h2 className='text-3xl font-bold my-3'>Top 1% Locations Worldwide</h2>

                <form className='flex justify-between items-center max-w-[600px]  border p-1 w-full rounded-lg bg-gray-100/90 text-center text-black mx-auto'>
                    <div className=''>
                        <input className=' bg-transparent focus:outline-none  text-black w-[60vw] md:w-[30vw] mx-2' type="text" placeholder='Search Destination' />
                    </div>
                    <div>
                        <button className='mb-0'>
                            <CiSearch size={28} style={{color: "#ffff"}}/>
                        </button>
                    </div>
                </form>
            </div>
        </div>

    )
}

export default Hero
