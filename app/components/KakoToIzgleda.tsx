'use client'
import Image from 'next/image'
import React, { useRef } from 'react'
import sika1 from '@/public/imgs/KakoTo1.jpg'
import sika2 from '@/public/imgs/KakoTo2.jpg'
import sika3 from '@/public/imgs/KakoTo3.jpg'
import sika4 from '@/public/imgs/KakoTo4.jpg'
import sika5 from '@/public/imgs/KakoTo5.jpg'
import { useInView, motion } from 'framer-motion'
import Link from 'next/link'
function KakoToIzgleda() {
    const ref = useRef(null)
    const inView = useInView(ref, {
        once: true
    })
    return (
        <div className='flex w-full items-center justify-center flex-col gap-16 mt-16 '>
            <h2 className='font-black text-4xl text-gray-800'>Kako to izgleda</h2>
            <div className='grid grid-cols-4 w-full gap-4 px-8'
                ref={ref}>
                <motion.div className='row-span-2  relative w-full aspect-[1/1.6]'
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ delay: .5 }}
                >


                    <Image className='object-cover' fill src={sika1} alt=''></Image>
                </motion.div>
                <motion.div className='relative'
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ delay: 1.25 }}
                >
                    <Image className='object-cover' fill src={sika2} alt=''></Image>
                </motion.div>
                <motion.div className='relative col-span-2'
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ delay: .75 }}
                >
                    <Image className='object-cover object-[0_-3rem]' fill src={sika4} alt=''></Image>
                </motion.div>

                <motion.div className='relative col-span-2 object-[0_-5rem]'

                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ delay: 1.5 }}
                >


                    <Image className='object-cover' fill src={sika5} alt=''></Image>
                </motion.div>
                <motion.div className='relative '

                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ delay: 1 }}
                >

                    <Image className='object-cover' fill src={sika3} alt=''></Image>
                </motion.div>
            </div>
            <Link href={'/shop'} tabIndex={1} className='px-4 py-2 border-2 text-gray-500 font-medium bo-rder-gray-500 -mt-8 rounded-lg'>Poruči odmah.</Link>
        </div>
    )
}

export default KakoToIzgleda