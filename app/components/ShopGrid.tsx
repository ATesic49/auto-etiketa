import React from 'react'
import lego from '@/public/imgs/Lego.png'
import Image from 'next/image'
import ShopItem from './ShopItem'
function ShopGrid() {
    return (
        <div className=' flex flex-col gap-16 text-gary-800 justify-center w-full items-center  '>
            <div className='flex flex-col justify-center items-center gap-4'>
                <h1 className='text-5xl font-black '>World's Best Car Tag Supplier </h1>
                <div className='flex flex-center items-center gap-1 justify-center flex-col'>
                    <p className='text-gray-400 text-lg font-medium'>See for yourself </p>

                    {/* <svg xmlns="http://www.w3.org/2000/svg" className="stroke-gray-400 w-6 h-6" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M12 5l0 14" />
                        <path d="M18 13l-6 6" />
                        <path d="M6 13l6 6" />
                    </svg> */}
                </div>
            </div>
            <div className='grid grid-cols-4 gap-4 w-full px-16 '>
                <ShopItem />
                <ShopItem />
                <ShopItem />
                <ShopItem />
                <ShopItem />
                <ShopItem />
                <ShopItem />
                <ShopItem />
            </div>
        </div>
    )
}

export default ShopGrid