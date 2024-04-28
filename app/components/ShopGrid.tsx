import React from 'react'
import lego from '@/public/imgs/Lego.png'
import Image from 'next/image'
import ShopItem from './ShopItem'
function ShopGrid() {
    return (
        <div className=' flex flex-col gap-8 text-gary-800 justify-center w-full items-center py-16 '>
            <div className='flex flex-col justify-center items-center gap-4'>
                <h1 className='text-5xl font-black '>Worlds Best Car Tag Supplier </h1>
                <div className='flex flex-center items-center gap-1 justify-center flex-col'>
                    <p className='text-gray-400 text-lg font-medium'>See for yourself </p>


                </div>
                <input type="text" id='search' className='bg-gray-50 border-2 rounded-lg font-medium text-gray-600 border-gray-300 p-2 w-4/5 relative ' />
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