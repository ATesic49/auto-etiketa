'use client'
import Image from 'next/image'
import React from 'react'
import lego from '@/public/imgs/Lego.png'
import { deleteQuant, increaseQuant, korpaState, reduceQuant } from '@/app/redux/slices/korpaSlice'
import { useDispatch } from 'react-redux'
import { AnimatePresence } from 'framer-motion'
function fromDimToPri(dim: string) {
    if (dim === '15x20cm') {
        return 10
    } else {
        return 6
    }
}
function LeftCartItem({ tag }: { tag: korpaState }) {
    const dispatch = useDispatch()
    return (
        <div className='flex flex-col gap-2 select-none'>
            <div className='relative'>
                <div className='items-center justify-center absolute bottom-2 right-2 flex gap-2 bg-gray-200 rounded-lg'>
                    <div className='bg-gray-100 rounded-lg  aspect-square font-bold p-1 cursor-pointer'
                        onClick={() => dispatch(increaseQuant(tag))}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 aspect-square" viewBox="0 0 24 24" strokeWidth="1.8" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M12 5l0 14" />
                            <path d="M5 12l14 0" />
                        </svg>
                    </div>
                    <div className='rounded-lg   aspect-square font-bold '>
                        {tag.quantity}
                    </div>
                    <div
                        onClick={() => dispatch(reduceQuant(tag))}

                        className='bg-gray-100 rounded-lg  aspect-square font-bold p-1 cursor-pointer'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" strokeWidth="1.8" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M5 12l14 0" />
                        </svg>
                    </div>
                </div>
                <div className='aspect-square rounded-lg cursor-pointer bg-white  absolute -top-1 -right-1 w-6 flex items-center justify-center border h-6 '

                    onClick={() => dispatch(deleteQuant({
                        tag: tag.tag,
                        quantity: 1
                    }))}

                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 " viewBox="0 0 24 24" strokeWidth="2" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M18 6l-12 12" />
                        <path d="M6 6l12 12" />
                    </svg>
                </div>
                <Image alt='' src={tag.tag.slika} width={150} height={150} className='w-full aspect-square rounded-lg ' />
            </div>
            <div className='text-xs md:text-sm text-gray-600 font-medium grid grid-cols-2 items-center justify-between w-full '>
                <h2 className='text-sm md:text-lg font-bold text-gray-800'>{tag.tag.ime}</h2> <p className='text-right'>
                    {fromDimToPri(tag.tag.dimenzija) * tag.quantity}$
                </p>
            </div>
        </div>
    )
}

export default LeftCartItem