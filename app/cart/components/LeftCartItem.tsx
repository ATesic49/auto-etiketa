import Image from 'next/image'
import React from 'react'
import lego from '@/public/imgs/Lego.png'

function LeftCartItem() {
    return (
        <div className='flex flex-col gap-2'>
            <div className='relative'>
                <div className='aspect-square rounded-lg cursor-pointer bg-white  absolute -top-1 -right-1 w-6 flex items-center justify-center border h-6 '>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 " viewBox="0 0 24 24" strokeWidth="2" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M18 6l-12 12" />
                        <path d="M6 6l12 12" />
                    </svg>
                </div>
                <Image alt='' src={lego} className='w-full aspect-square rounded-lg ' />
            </div>
            <div className='text-sm text-gray-600 font-medium grid grid-cols-2 items-center justify-between w-full '>
                <h2 className='text-lg font-bold text-gray-800'>Lego Tag</h2> <p className='text-right'>400RSD</p>
            </div>
        </div>
    )
}

export default LeftCartItem