'use client'
import Image from 'next/image'
import React from 'react'
import Logo from '@/public/imgs/Logo.png'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
function Navbar() {
    const pathname = usePathname()
    return (
        <div className='flex px-8 py-4  border-b-2 gap-16 justify-start items-center sticky top-0 z-[999] bg-white border-gray-400'>
            <Link href={'/'}>
                <Image alt='AutoEtiketa' className='aspect-square w-20 -my-4' src={Logo}></Image>
            </Link>
            <nav className='flex   justify-center text-gray-500 font-semibold text-base gap-4 items-center underline-offset-8 duration-200'>
                <Link href={'/'} className={`${pathname === '/' && 'text-gray-800 underline '}`} >Home</Link>
                <Link href={'/shop'} className={`${pathname === '/shop' && 'text-gray-800 underline '}`} >Shop</Link>

            </nav>
            <div className='ml-auto flex items-center justify-center gap-4'>




                <Link href={'/search'} >
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 stroke-gray-800" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                        <path d="M21 21l-6 -6" />
                    </svg>
                </Link>
                <Link href={'/cart'} >
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 stroke-gray-800" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                        <path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                        <path d="M17 17h-11v-14h-2" />
                        <path d="M6 5l14 1l-1 7h-13" />
                    </svg></Link>

            </div>
        </div>
    )
}

export default Navbar