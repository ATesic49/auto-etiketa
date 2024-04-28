import React from 'react'
import Image from 'next/image'
import lego from '@/public/imgs/Lego.png'
import LeftCartItem from './components/LeftCartItem'
function page() {
    return (
        <div className='grid grid-cols-3 min-h-screen' >
            <div className='grid col-span-2 p-8 grid-cols-4 gap-8 border-r-2 border-gray-400 '>
                <LeftCartItem />
                <LeftCartItem />
                <LeftCartItem />
                <LeftCartItem />
            </div>
            <div className='flex flex-col gap-4 p-4'>
                <div className='text-sm items-end font-bold text-gray-800 grid grid-cols-5 py-2 border-gray-400 border-b-2 gap-4'>
                    <p >Ime</p>

                    <p>Boja</p>
                    <p>Dimenzije</p>
                    <p>Broj</p>
                    <p>Cena</p>
                </div>
                <div className='font-medium grid-cols-5 grid text-sm text-gray-600 gap-4'>
                    <p>Lego Tag</p>
                    <p>Crvena</p>
                    <p>15x20</p>
                    <p >2</p>
                    <p>800RSD</p>
                </div>
                <div className=' sticky bottom-4  text-sm items-end font-bold text-gray-800 mt-auto grid grid-cols-5 py-2 border-gray-400 border-b-2 gap-4'>
                    <p className='col-span-4 '>Ukupno:</p>
                    <p>5600RSD</p>
                </div>
            </div>
        </div >
    )
}

export default page