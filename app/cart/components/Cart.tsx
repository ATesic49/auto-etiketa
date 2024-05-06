'use client'
import React, { useState } from 'react'
import LeftCartItem from './LeftCartItem'
import { useAppSelector } from '@/app/redux/store'
import { korpaState } from '@/app/redux/slices/korpaSlice'
import { motion } from 'framer-motion'
import Link from 'next/link'
import PayForm from './PayForm'
function Cart() {
    const [open, setOpen] = useState(false)
    const tags = useAppSelector(state => state.korpaSlice)
    function fromDimToPri(dim: string) {
        if (dim === '15x20cm') {
            return 1000
        } else {
            return 500
        }
    }
    function saberiSve(tags: korpaState[]) {
        let ukupno = 0
        tags.map(tag => {
            ukupno += tag.quantity * fromDimToPri(tag.tag.dimenzija)
        })
        return ukupno
    }
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 min-h-screen' >
            {tags.length > 0 ? <div className='grid col-span-2  p-4 md:p-8 grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 border-r-2 border-gray-400 '>
                {tags.map((tag, i) => {

                    return <LeftCartItem key={i} tag={tag} />
                })}
            </div> : <div className='col-span-2 flex justify-center items-center flex-col gap-4 pb-16'>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-32 aspect-square stroke-gray-300" viewBox="0 0 24 24" stroke-width="1.6" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                    <path d="M17 17a2 2 0 1 0 2 2" />
                    <path d="M17 17h-11v-11" />
                    <path d="M9.239 5.231l10.761 .769l-1 7h-2m-4 0h-7" />
                    <path d="M3 3l18 18" />
                </svg>
                <p className='text-gray-400 '>Vaša Korpa je prazna</p>
                <Link href={'/shop'} className='px-4 py-2 rounded-lg bg-gradient-to-t from-orange-500 to-orange-400 text-gray-50 focus:scale-95 duration-200 font-medium '>Nazad na kupovinu</Link>
            </div>
            }

            <div className='flex flex-col gap-4 p-4'>
                <div className='text-sm items-end font-bold text-gray-800 grid grid-cols-5 py-2 border-gray-400 border-b-2 gap-4'>
                    <p >Ime</p>

                    <p>Boja</p>
                    <p>Dimenzije</p>
                    <p className='text-center'>Broj</p>
                    <p>Cena</p>
                </div>
                {tags.map((tag, i) => {
                    return <div key={i} className='font-medium grid-cols-5 grid text-sm text-gray-600 gap-4'>
                        <p>{tag.tag.ime}</p>
                        <p>{tag.tag.boja}</p>
                        <p>{tag.tag.dimenzija}</p>
                        <p className='text-center'>{tag.quantity}</p>
                        <p>{fromDimToPri(tag.tag.dimenzija) * tag.quantity} </p>
                    </div>
                })}
                <div className='flex flex-col gap-2 items-center justify-center w-full sticky bottom-4  mt-auto'>

                    <div className=' text-sm items-end font-bold text-gray-800  grid grid-cols-5 py-2 border-gray-400 border-b-2 gap-4 w-full'>
                        <p className='col-span-4 '>Ukupno:</p>
                        <p>{saberiSve(tags)}RSD</p>
                    </div>
                    <button className={`
                    ${tags.length === 0 && 'opacity-50 cursor-not-allowed'}
                    
                    flex justify-center items-center bg-gradient-to-b from-orange-400 to-orange-500 text-gray-50 font-medium w-full px-4 rounded-lg  py-2`} onClick={() => {
                            if (tags.length === 0) return
                            setOpen(true)
                        }}>Proceed to checkout</button>
                </div>


            </div>
            <PayForm open={open} setOpen={setOpen} />
        </div >

    )
}

export default Cart