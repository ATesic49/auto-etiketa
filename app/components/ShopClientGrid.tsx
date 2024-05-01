'use client'
import React, { useState } from 'react'
import ShopItem from './ShopItem';
import { group } from 'console';
type tag = {
    id: number;
    slika: string;
    ime: string;
    dimenzija: string;
    boja: string;
}
function ShopClientGrid({ GrupedBy, drugiProizvodi }: {
    GrupedBy: tag[][], drugiProizvodi: Record<string, tag[]>
}) {
    const [search, setSearch] = useState('')
    return (
        <>
            <div className='flex flex-col justify-center items-center gap-4'>
                <h1 className='text-5xl font-black '>Worlds Best Car Tag Supplier </h1>
                <div className='flex flex-center items-center gap-1 justify-center flex-col'>
                    <p className='text-gray-400 text-lg font-medium'>See for yourself </p>


                </div>
                <input onChange={e => setSearch(e.target.value)} type="text" id='search' className='bg-gray-50 border-2 rounded-lg font-medium text-gray-600 border-gray-300 p-2 w-4/5 relative ' />
            </div>

            <div className='grid grid-cols-4 gap-4 w-full px-16 '>
                {GrupedBy.map((grup, i) => {
                    if (grup[0].ime.toLowerCase().includes(search.toLowerCase())) {

                        return <ShopItem drugiProizvodi={drugiProizvodi[grup[0].ime]} tag={grup} key={i} />
                    }
                })}
                {/* <ShopItem  /> */}
            </div>
        </>
    )
}

export default ShopClientGrid