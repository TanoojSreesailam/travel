/* eslint-disable no-unused-vars */
import React from 'react'

import BoraBora from '../assets/borabora.jpg'
import BoraBora2 from '../assets/borabora2.jpg'
import Keywest from '../assets/keywest.jpg'
import Maldives from '../assets/maldives.jpg'
import Maldives2 from '../assets/maldives2.jpg'
import Maldives3 from '../assets/maldives3.jpg'
import Cards from './Cards'

function Select() {
    return (
        <div className='max-w-[100vw] h-full mx-auto px-4 py-16 grid sm:grid-cols-2 lg:grid-cols-3 lg:gap-4 sm:gap-3'>
            <Cards bg={Maldives} text="Maldives"/>
            <Cards bg={Maldives2} text="Jamaica"/>
            <Cards bg={Maldives3} text="Atlantic"/>
            <Cards bg={BoraBora} text="Maldives Main"/>
            <Cards bg={BoraBora2} text="BoraBora"/>
            <Cards bg={Keywest} text="Keywest"/>
        </div> 
    )
}

export default Select
