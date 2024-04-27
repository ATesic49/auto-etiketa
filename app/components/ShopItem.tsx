import React from 'react'
import lego from '@/public/imgs/Lego.png'
import Image from 'next/image'
function ShopItem() {
    return (
        <div className='flex flex-col gap-4 rounded '>
            <Image src={lego} alt='Lego tag' className='w-full aspect-square rounded-lg'></Image>
            <div className='flex flex-col px-2 '>
                <p className='uppercase text-xs text-gray-500 font-normal '>lego</p>
                <div className='flex items-center justify-between'>
                    <h2 className='font-semibold text-gray-700 text-xl'>Lego Tag</h2>
                    <p className='text-gray-500 font-medium ml-auto'>400rsd</p>
                </div>
                {/* <button className='mt-2 rounded-lg bg-gradiendasdt-to-t from-orange-500 to-orange-300 text-gray-500 border w-fit px-4 py-2 ml-auto '>Add to cart</button> */}
            </div>

        </div>
    )
}

export default ShopItem