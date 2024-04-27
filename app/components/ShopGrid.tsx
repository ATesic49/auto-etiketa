import React from 'react'
import lego from '@/public/imgs/Lego.png'
import Image from 'next/image'
import ShopItem from './ShopItem'
function ShopGrid() {
    return (
        <div className=' flex flex-col gap-16 text-gary-800 justify-center w-full items-center  '>
            <h1 className='text-4xl font-bold '>Lorem ipsum dolor sit   </h1>
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