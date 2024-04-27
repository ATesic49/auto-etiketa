import React from 'react'
import lego from '@/public/imgs/Logo.png'
import Image from 'next/image'
function page() {
    return (
        <div className='h-screen flex  items-center gap-16 px-16 py-16 flex-col relative '>
            <Image priority className='-z-10 blur-sm opacity-15 object-cover object-center w-full h-full' fill src={lego} alt='' />
            <h1 className='font-black text-6xl'>Terms of Service</h1>
            <div className='flex flex-col gap-4 w-[40em] max-w-11/12'>
                <p className='text-base font-medium     '>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe, voluptatem amet ratione nobis exercitationem rem qui ea error quas. Voluptatem sint explicabo voluptate sequi, aliquid facilis doloribus provident similique unde?</p>
                <p className='text-base font-medium    '>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe, voluptatem amet ratione nobis exercitationem rem qui ea error quas. Voluptatem sint explicabo voluptate sequi, aliquid facilis doloribus provident similique unde?</p>
            </div>
        </div>
    )
}

export default page