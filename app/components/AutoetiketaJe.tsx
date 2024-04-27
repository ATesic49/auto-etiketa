import React from 'react'
import slika from '@/public/imgs/NasaPrica1.jpg'
import Image from 'next/image'
function AutoetiketaJe() {
    return (
        <div className='flex px-16 mt-16 flex-col gap-16 w-full items-center justify-center'>
            <h2 className='font-black text-4xl text-gray-800 '>Autoetiketa Je</h2>
            <div className='flex justify-center items-center gap-16'>
                <div className='flex flex-col gap-4 items-center justify-center max-w-[30em]'>
                    <h3 className='text-2xl text-gray-800 font-bold'>Stil u pokretu</h3>

                    <p className='text-gray-600 font-medium text-center'>Kreativan
                        pristup stvaranju percepcije vozila ,
                        koj a nadmašuje običnu funkcionalnost i
                        potvrđuje automobil kao izraz stila i ličnosti ,
                        diskretno oplemenjuje ceo utisak i akcentuje
                        preferencije vlasnika vozila .</p>
                </div>
                <div className='flex flex-col gap-4 items-center justify-center max-w-[29em]'>
                    <h3 className='text-2xl  text-gray-800 font-bold'>Brendirana Vožnja</h3>
                    <p className='text-gray-600 font-medium text-center'>Marketinši
                        alat u predstavljanju brenda koji
                        integrira modne i promotivne elemente .
                        Autoetiketa kombinuje estetiku vozila s
                        vizuelnim identitetom firme ili proizvoda ,
                        čime naglašava imidž kome težimo.</p>
                </div>
            </div>
        </div>
    )
}

export default AutoetiketaJe