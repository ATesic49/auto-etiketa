import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Logo from '@/public/imgs/Logo.png'
function Footer() {
    return (
        <div className='flex px-8 py-4 border-t items-center justify-between relative'>
            <div className='flex items-center justify-center gap-2 text-gray-500 font-medium'>
                <Link href={'/'}>
                    <Image alt='AutoEtiketa' className='aspect-square w-16 -my-4 mr-8' src={Logo}></Image>
                </Link>

                <Link href={'/'}  >Home</Link>
                <Link href={'/shop'}>Shop</Link>

            </div>



            <div className='text-xs mt-auto text-gray-500 absolute bottom-4 left-1/2 -translate-x-1/2'>
                <Link href={'/terms-of-service'} className='   hover:underline underline-offset-2'>Terms of service</Link>
            </div>
            <Link href={'https://www.instagram.com/autoetiketa/'} className=''>
                <svg xmlns="http://www.w3.org/2000/svg" className="aspect-square w-8 stroke-pink-600" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
                    <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                    <path d="M16.5 7.5l0 .01" />
                </svg>
            </Link>
        </div>
    )
}

export default Footer