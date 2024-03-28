/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { FaArrowCircleLeft, FaArrowCircleRight} from "react-icons/fa";
import BoraBora from '../assets/borabora.jpg'
import BoraBora2 from '../assets/borabora2.jpg'
import Keywest from '../assets/keywest.jpg'

const data = [
    {
      url: 'https://images.unsplash.com/photo-1515238152791-8216bfdf89a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80',
    },
    {
      url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2073&q=80',
    },
    {
      url: 'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    },
  ];

function Carousels() {
    const [slide, setSlide] = useState(0);
    const length = data.length;

    const prevSlide = () => {
        setSlide(slide === 0?length-1: slide-1)
    }

    const nextSlide = () =>{
        setSlide(slide === length-1?0:slide+1)
    }

    return (
        <div className='max-w-[100vw] px-8 py-20 relative flex justify-center items-center mx-auto'>
            <FaArrowCircleLeft onClick={prevSlide} size={30} className='absolute text-white top-[50%] left-8 cursor-pointer sm:left-12'/>
            <FaArrowCircleRight onClick={nextSlide} size={30} className='absolute text-white right-8 top-[50%] cursor-pointer sm:rigth-12'/>
            {data.map((item, index) =>(
                <div className={index === slide? 'opacity-100': 'opacity-0'}>
                    {index === slide && (<img className='w-full rounded-2xl object-cover' src={item.url} alt='/'/>)}
                </div>
            ))}
            
        </div>
    )
}

export default Carousels
