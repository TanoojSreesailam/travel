/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { CiSearch } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { CiFacebook } from "react-icons/ci";
import { FaWhatsapp, FaYoutube, FaFacebook, FaTwitter } from 'react-icons/fa';
import { RiInstagramFill } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";

function Navbar() {

    const [nav, setNav] = useState(false);
    const [logo, setLogo] = useState(false);

    const handleNav = () =>{
        setNav(!nav)
        setLogo(!logo)
    }

    return (
        <div className='p-4 flex justify-between items-center absolute w-full z-10 text-white'>
            <div>
                <h1 onClick={handleNav} className={logo? "hidden" : 'font-bold text-5xl'}>SPOT.</h1>
            </div>
            <div className='hidden md:flex text-2xl'>
                <a href="">Home</a>
                <a href="">Destinations</a>
                <a href="">Travel</a>
                <a href="">View</a>
                <a href="">Contact</a>
            </div>
            <div className=" hidden md:flex items-center justify-between">
                <CiSearch className='mx-2 font-bold' size="1.8em"/>
                <IoPersonOutline className='mx-2 font-bold' size="1.8em" />
            </div>
            <div onClick={handleNav} className='md:hidden z-10'>
                {nav? <AiOutlineClose className='' style={{color: "#000"}} size={20}/>:<RxHamburgerMenu size={20}/>}
                
            </div>
            <div onClick={handleNav} className={nav? 'absolute top-0 left-0 bg-gray-100/90 py-6 px-4 w-full h-screen flex flex-col text-2xl text-black z-10' : "absolute left-[-100%] top-[-100vh]"}>
                <h1 className='font-bold text-4xl mb-5 '>SPOT.</h1>
                <a className='border-b border-slate-700' href="">Home</a>
                <a className='border-b border-slate-700' href="">Destinations</a>
                <a className='border-b border-slate-700' href="">Travel</a>
                <a className='border-b border-slate-700' href="">View</a>
                <a className='border-b border-slate-700' href="">Contact</a>
                <div className='flex flex-col mt-5'>
                    <button>Search</button>
                    <button>Account</button>
                </div>
                <div className='flex justify-around mt-5'>
                    <FaFacebook size={50} className='icon'/>
                    <RiInstagramFill size={51} className='icon'/>
                    <FaWhatsapp size={50} className='icon'/>
                    <FaYoutube size={52} className='icon'/>
                    <FaTwitter size={52} className='icon'/>
                </div>
            </div>

        </div>
    )
}

export default Navbar
