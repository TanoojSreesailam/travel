/* eslint-disable no-unused-vars */
import React from 'react'

import {
    FaFacebook,
    FaTwitter,
    FaInstagram,
    FaPinterest,
    FaYoutube,
  } from 'react-icons/fa';

function Footer() {
    return (
        <div className='w-full px-4 py-16'>
            <div className="max-w-[100vw] mx-auto flex flex-col px-4">
                <div className='sm:flex text-center justify-between items-center'>
                    <h1 className='font-bold text-3xl'>BEACHES.</h1>
                    <div className='flex justify-around w-full sm:max-w-[280px] my-4'>
                        <FaFacebook  size={30} className='icon' />
                        <FaTwitter size={30} className='icon' />
                        <FaYoutube size={30} className='icon' />
                        <FaPinterest size={30} className='icon' />
                        <FaInstagram size={30} className='icon' />
                    </div>
                </div>
                <div className='flex justify-around text-center items-center py-3 flex-col gap-5 sm:flex-row'>
                    <ul className='lg:flex-col'>
                        <li>About</li>
                        <li>Partnerships</li>
                        <li>Careers</li>
                        <li>Newsroom</li>
                        <li>Advertising</li>
                    </ul>

                    <ul className='lg:flex-col'>
                        <li>Socialize</li>
                        <li>Network</li>
                        <li>Collaborate</li>
                        <li>Engage</li>
                        <li>Connect</li>
                    </ul>

                    <ul className='text-center lg:flex-col'>
                        <li>Home</li>
                        <li>Destinations</li>
                        <li>Travel</li>
                        <li>View</li>
                        <li>Book</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer
