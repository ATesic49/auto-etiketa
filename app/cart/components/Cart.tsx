'use client'
import React from 'react'
import LeftCartItem from './LeftCartItem'
import { useAppSelector } from '@/app/redux/store'
import { korpaState } from '@/app/redux/slices/korpaSlice'

function Cart() {
    const tags = useAppSelector(state => state.korpaSlice)
    console.log(tags)
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
        <div className='grid grid-cols-3 min-h-screen' >
            <div className='grid col-span-2 p-8 grid-cols-4 gap-8 border-r-2 border-gray-400 '>
                {tags.map((tag, i) => {
                    return <LeftCartItem key={i} tag={tag} />
                })}
            </div>
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

                <div className=' sticky bottom-4  text-sm items-end font-bold text-gray-800 mt-auto grid grid-cols-5 py-2 border-gray-400 border-b-2 gap-4'>
                    <p className='col-span-4 '>Ukupno:</p>
                    <p>{saberiSve(tags)}RSD</p>
                </div>
            </div>
        </div >
    )
}

export default Cart