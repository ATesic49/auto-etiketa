'use client'
import React from 'react'
import lego from '@/public/imgs/Lego.png'
import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
function ShopItem() {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className='flex flex-col gap-4 rounded '>
            <AnimatePresence>
                {isOpen && <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setIsOpen(false)}
                    className='fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-40 z-[49999]'></motion.div>
                }

            </AnimatePresence>
            <div className='w-full aspect-square rounded-lg group overflow-hidden cursor-pointer'>

                <Image src={lego} alt='Lego tag' className='w-full aspect-square rounded-lg group-hover:scale-105 duration-200' onClick={() => setIsOpen(true)}></Image>
            </div>
            <div className='flex flex-col px-2 '>
                <p className='uppercase text-xs text-gray-500 font-normal '>lego</p>
                <div className='flex items-center justify-between'>
                    <h2 className='font-semibold text-gray-700 text-xl'>Lego Tag</h2>
                    <p className='text-gray-500 font-medium ml-auto'>400rsd</p>
                </div>
                {/* <button className='mt-2 rounded-lg bg-gradiendasdt-to-t from-orange-500 to-orange-300 text-gray-500 border w-fit px-4 py-2 ml-auto '>Add to cart</button> */}
            </div>
            <AnimatePresence>
                {isOpen && <motion.div

                    className='fixed top-1/2 border-2 z-[50000] left-1/2 bg-white rounded-lg
             
             flex flex-col gap-4 items-center justify-start p-4
             '
                    initial={{ x: '-50%', y: '-50%', opacity: 0, scale: .5 }}
                    animate={{ x: '-50%', y: '-50%', opacity: 1, scale: 1 }}
                    exit={{ x: '-50%', y: '-50%', opacity: 0, scale: .5 }}
                >

                    <h2 className='text-2xl font-bold text-gray-800'>Lego Tag</h2>
                    <div className='grid grid-cols-2 px-2 w-full gap-8'>
                        <div className='flex flex-col gap-4 items-center  justify-start text-gray-600  font-medium text-sm'>
                            <div className='grid grid-cols-2 justify-start items-center w-full gap-4'>
                                <label htmlFor='dimenzije'>Dimenzije:</label>
                                <select name="dimenzije" id="dimenzije" className='p-2 border rounded-lg'>
                                    <option value="15x20">15x20cm</option>
                                    <option value="7.5x10">7.5x10cm</option>
                                </select>
                            </div>
                            <div className='grid grid-cols-2   justify-start items-center w-full gap-4'>
                                <label htmlFor='boja'>Boja:</label>
                                <select name="boja" id="boja" className='p-2 border rounded-lg'>
                                    <option value="15x20">Plava</option>
                                    <option value="7.5x10">Crvena</option>
                                </select>

                            </div>
                            <div className='grid grid-cols-2   justify-start items-center w-full gap-4'>
                                <label htmlFor='kvantitet'>Quantity:</label>
                                <input name="kvantitet" type='number' id="kvantitet" className='p-2 border rounded-lg' defaultValue={1} min={1} />

                            </div>
                            <div className='mt-auto flex flex-col gap-4 w-full'>
                                <div className='grid items-center justify-center grid-cols-2 border-b-2 py-2'>
                                    <p className=' text-gray-600 font-medium'>Total:</p>
                                    <span className='text-gray-800 text-xl  font-bold ml-auto'>200rsd</span>
                                </div>
                                <button className='bg-gradient-to-t from-orange-500 shadow-sm shadow-orange-200 to-orange-400 py-2  px-4 flex items-center justify-center text-gray-100  rounded-lg w-full gap-4 text-base       '>
                                    <p>Add to cart</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 stroke-gray-100 aspect-square" viewBox="0 0 24 24" strokeWidth="1.75" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                                        <path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                                        <path d="M17 17h-11v-14h-2" />
                                        <path d="M6 5l14 1l-1 7h-13" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <Image className='rounded-lg' src={lego} alt='LegoTag'></Image>
                    </div>
                </motion.div>}
            </AnimatePresence>
        </div>
    )
}

export default ShopItem