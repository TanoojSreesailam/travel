/* eslint-disable no-unused-vars */
import React from 'react'
import { MdOutlineTravelExplore } from "react-icons/md";
import { RiCustomerService2Fill } from "react-icons/ri";

function Search() {
    return (
        <div className='max-w-[100vw] mx-auto grid grid-cols-3'>
            <div className='col-span-3 lg:col-span-2 flex flex-col justify-evenly  border-gray-100 border-2'>
                <div>
                    <h1 className='text-2xl font-bold px-3'>LUXURY INCLUDED VACATIONS FOR TWO PEOPLE</h1>
                    <p className='py-4 px-3'>Come experience the very pinnacle of luxury Caribbean all-inclusive vacations for couples at BEACHES Resorts. Our luxury beach resorts, set along the most gorgeous tropical settings and exquisite beaches in Saint Lucia, Jamaica, Antigua, The Bahamas, Grenada, Barbados and Curaçao, feature unlimited gourmet dining, unique bars serving premium liquors and wines, and every land and water sport, including complimentary green fees at our golf resorts and certified scuba diving at most resorts. If you are planning a wedding, BEACHES is the leader in Caribbean destination weddings and honeymoon packages.</p>
                </div>
                <div className='grid sm:grid-cols2 gap-8 py-4 px-2'>

                    <div className='flex flex-col sm:flex-row items-center py-4'>
                        <button>
                            < MdOutlineTravelExplore size={40} style={{color:"fff"}} />
                        </button>
                        <div>
                            <h3 className='font-bold text-lg text-center sm:text-start px-3'>WORLD EXPLORE</h3>
                            <p className='text-sm text-center sm:text-start px-3 pb-2'>ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW</p>
                        </div>
                        <button>
                            <RiCustomerService2Fill size={40} style={{color:"fff"}} />
                        </button>
                        <div>
                            <h3 className='font-bold text-lg text-center sm:text-start px-3'>LEADING SERVICE</h3>
                            <p className='text-sm text-center sm:text-start px-3'>ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='col-span-3 lg:col-span-1  border-gray-200 border-2 '>
                <div className='text-center'>
                    <p className='pt-2 px-3'>GET AN ADDITIONAL 10% OFF</p>
                    <p className='pt-2 px-3'>USING THIS COUPON <span className='font-bold'> #APTZ07</span></p>
                    <p className='py-4 px-3 font-medium' style={{color:"red"}}>12 HOURS LEFT</p>
                    <p className='bg-gray-800 text-gray-200 py-2 px-3'>BOOK NOW AND SAVE</p>
                </div>
                <form className='w-full'>
                    <div className='flex flex-col px-3 my-2' >
                        <label htmlFor="" className='font-semibold'>Destination</label>
                        <select name="" id="" className='p-2'>
                            <option>Maldives</option>
                            <option>Keywest</option>
                            <option>Borabora</option>
                            <option>Atlantic</option>
                        </select>
                    </div>
                    <div className='flex flex-col px-3 my-2'>
                        <label htmlFor="" className='font-semibold'>Check-in</label>
                        <input type="date" className="p-2" />
                    </div>
                    <div className='flex flex-col px-3 my-2'>
                        <label htmlFor="" className='font-semibold'>Check-out</label>
                        <input type="date" className="p-2" />
                    </div>
                    <button className='w-full' style={{color:"#fff"}}>Rates and Availablity</button>
                </form>
            </div>
        </div>
    )
}

export default Search
