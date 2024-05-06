'use client'
import { motion } from 'framer-motion'
import React, { useState } from 'react'
import Image from 'next/image'
import NasaPrica1 from '@/public/imgs/NasaPrica1.jpg'
import NasaPrica2 from '@/public/imgs/NasaPrica2.jpg'
function NasaPrica() {
    const [isLeft, setIsLeft] = useState(false)
    return (
        <div className='flex flex-col gap-8 md:gap-16 items-center justify-center w-full'>
            <h2 className='md:text-4xl text-2xl font-black text-gray-800'>Naša Priča</h2>
            <div className='flex md:gap-0 gap-8 flex-col md:flex-row justify-between items-center w-full md:pl-16 md:pr-0 px-4  '>
                <div className='flex flex-col text-gray-600 font-medium  items-center md:w-2/5 justify-start gap-2 max-w-[40em]'>
                    <p>AutoEtiketa
                        je nastala kao ideja pravih ljubitelja automobila i
                        komunikacija koji su želeli da na jedan sofisticirani način
                        povežu ove dve branše bez narušavanja integriteta svake od
                        njih ponaosob.</p>
                    <p>Sinergija i kompaktnost ovog rešenja za nas predstavlja
                        doprinos autentičnoj komunikaciji uz poštovanje individualne
                        estetike svakog vozila.
                    </p>
                </div>
                <div className='relative md:w-2/5 w-full  h-full bg-blue-200 aspect-video isolate  overflow-clip '>
                    <motion.div className='absolute top-1/2 left-0 -translate-y-1/2 bg-gray-500 cursor-pointer backdrop-blur-sm bg-opacity-75 p-2   z-30 aspect-square'
                        onClick={() => setIsLeft(!isLeft)}
                        initial={{ y: '-50%', rotateX: 0 }}
                        animate={isLeft ? { y: '-50%', rotateZ: '180deg' } : { y: '-50%', rotateZ: 0 }}
                        transition={{ duration: .5, ease: 'backInOut', bounce: 'spring' }}
                    >


                        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 stroke-gray-50" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M5 12l14 0" />
                            <path d="M5 12l6 6" />
                            <path d="M5 12l6 -6" />
                        </svg>
                    </motion.div>
                    <Image className='absolute object-cover top-0 left-0 w-full h-full z-10' src={NasaPrica1} alt=''></Image>
                    <motion.div className='absolute object-cover top-0 left-full w-full h-full z-20'
                        initial={{ y: 0, x: 0 }}
                        animate={isLeft ? { y: 0, x: '-100%' } : { y: 0, x: 0 }}
                        transition={{ duration: .5, ease: 'backInOut' }}
                    >
                        <Image src={NasaPrica2} alt=''></Image>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default NasaPrica