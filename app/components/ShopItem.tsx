'use client'
import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import ShopBoja from './ShopBoja'
import { Swiper, SwiperSlide } from 'swiper/react';
import lego from '@/public/imgs/Lego.png'
import Image from 'next/image'
import { useRef, useState } from 'react';
import 'swiper/css';
type tag = {
    id: number;
    slika: string;
    ime: string;
    dimenzija: string;
    boja: string;
}
type MapObject = { [key: string]: tag };


function ShopItem({ tag, drugiProizvodi }: { tag: tag[], drugiProizvodi: tag[] }) {
    const konacnoBoja = reduceProizvod(drugiProizvodi)

    const [t, setT] = useState(konacnoBoja.findIndex(element => element.boja === tag[0].boja))
    const [isOpen, setIsOpen] = useState(false)
    const [imageStrting, setImageString] = useState(`/imgs/proizvodi/${tag[0].slika}`)
    function appendNumberToFilename(filename: string) {
        // Check if the string ends with '.png'
        if (filename.endsWith('.png')) {
            // Find the position where '.png' starts
            const index = filename.lastIndexOf('.png');
            // Insert '2' before '.png'
            return filename.substring(0, index) + '2.png';
        }
        return filename;
    }
    const [cena, setCena] = useState(1000)
    const [quant, setQuant] = useState(1)
    function reduceProizvod(drugiProizvodi: tag[]): tag[] {
        const array: MapObject = {};
        drugiProizvodi.map(drugiProizvod => {
            if (!array[drugiProizvod.boja]) {
                array[drugiProizvod.boja] = drugiProizvod;
            }
        });
        return Object.values(array);
    }
    return (
        <div className='flex flex-col gap-4 rounded '>
            <AnimatePresence>
                {isOpen && <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setIsOpen(false)}
                    className='fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-40 z-[49999]'></motion.div>
                }

            </AnimatePresence>
            <div className='w-full aspect-square rounded-lg group overflow-hidden cursor-pointer'>

                <Image src={`/imgs/proizvodi/${tag[0].slika}`} width={250} height={250} alt={`${tag[0].slika}`} className='w-full aspect-square rounded-lg group-hover:scale-105 duration-200' onClick={() => setIsOpen(true)}></Image>
            </div>
            <div className='flex flex-col px-2 '>
                <p className='uppercase text-xs text-gray-500 font-normal '>lego</p>
                <div className='flex items-center justify-between'>
                    <h2 className='font-semibold text-gray-700 text-xl'>{tag[0].ime}</h2>
                    <p className='text-gray-500 font-medium ml-auto'>{cena}rsd</p>
                </div>
                {/* <button className='mt-2 rounded-lg bg-gradiendasdt-to-t from-orange-500 to-orange-300 text-gray-500 border w-fit px-4 py-2 ml-auto '>Add to cart</button> */}
            </div>
            <AnimatePresence>
                {isOpen && <motion.div

                    className='fixed top-1/2 border-2 z-[50000] left-1/2 bg-white rounded-lg
             
             flex flex-col gap-4 items-center justify-start p-4
             '
                    initial={{ x: '-50%', y: '-50%', opacity: 0, scale: .5 }}
                    animate={{ x: '-50%', y: '-50%', opacity: 1, scale: 1 }}
                    exit={{ x: '-50%', y: '-50%', opacity: 0, scale: .5 }}
                >

                    <h2 className='text-2xl font-bold text-gray-800'>{tag[0].ime}</h2>
                    <div className='grid grid-cols-2 px-2 w-full gap-8'>
                        <div className='flex flex-col gap-4 items-center  justify-start text-gray-600  font-medium text-sm'>
                            <div className='grid grid-cols-2 justify-start items-center w-full gap-4'>
                                <label htmlFor='dimenzije'>Dimenzije:</label>
                                <select onChange={e => { setCena(Number(e.target.value)) }} name="dimenzije" id="dimenzije" className='p-2 border rounded-lg'>
                                    <option value="1000" onClick={() => setCena(1000)}>{tag[0].dimenzija}cm</option>
                                    <option value="500" onClick={() => setCena(500)}>{tag[1].dimenzija}cm</option>
                                </select>
                            </div>
                            <div className='grid grid-cols-2   justify-start items-center w-full gap-4'>
                                <label htmlFor='boja'>Boja:</label>
                                <select
                                    value={konacnoBoja[t].boja}
                                    onChange={(e) => {
                                        setImageString(`/imgs/proizvodi/${konacnoBoja[konacnoBoja.findIndex(element => element.boja === e.target.value)].slika}`)
                                        setT(konacnoBoja.findIndex(element => element.boja === e.target.value))

                                    }
                                    }
                                    name="boja" id="boja" className='p-2 border rounded-lg'>
                                    {konacnoBoja.map((boja, i) => {

                                        return <option key={i} value={boja.boja}>{boja.boja}</option>
                                    })}

                                </select>

                            </div>
                            <div className='grid grid-cols-2   justify-start items-center w-full gap-4'>
                                <label htmlFor='kvantitet'>Quantity:</label>
                                <input name="kvantitet" onChange={e => setQuant(Number(e.target.value))} type='number' id="kvantitet" className='p-2 border rounded-lg' defaultValue={1} min={1} />

                            </div>
                            <div className='mt-auto flex flex-col gap-4 w-full'>
                                <div className='grid items-center justify-center grid-cols-2 border-b-2 py-2'>
                                    <p className=' text-gray-600 font-medium'>Total:</p>
                                    <span className='text-gray-600 text-lg   font-bold ml-auto'>{cena * quant}RSD</span>
                                </div>
                                <button className='bg-gradient-to-t from-orange-500 shadow-sm shadow-orange-200 to-orange-400 py-2  px-4 flex items-center justify-center text-gray-100  rounded-lg w-full gap-4 text-base       '>
                                    <p>Add to cart</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 stroke-gray-100 aspect-square" viewBox="0 0 24 24" strokeWidth="1.75" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                                        <path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                                        <path d="M17 17h-11v-14h-2" />
                                        <path d="M6 5l14 1l-1 7h-13" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div className=' flex flex-col gap-2'>
                            <div className='cursor-pointer w-full h-[calc(100%_-_64px)] relative group'>
                                <Image priority className='rounded-lg object-cover object-center group-hover:opacity-0 duration-200 opacity-100' fill src={imageStrting} alt='LegoTag'></Image>
                                <Image priority className='rounded-lg object-cover object-center group-hover:opacity-100  opacity-0 duration-200' fill src={`${appendNumberToFilename(imageStrting)}`} alt='LegoTag'></Image>
                            </div>
                            <Swiper
                                spaceBetween={32}
                                slidesPerView={4.5}

                                className=" mx-auto max-w-full px-16 w-fit  "
                            >
                                {konacnoBoja.length > 1 && <>

                                    {konacnoBoja.map((konacno, i) =>

                                        <SwiperSlide className='py-2 min-w-8' key={i}>
                                            {t === i ? <ShopBoja setImageString={setImageString} key={i} konacno={konacno} t i={i} setT={setT} /> : <ShopBoja setImageString={setImageString} konacno={konacno} key={i} i={i} setT={setT} />}
                                        </SwiperSlide>)}
                                </>}



                            </Swiper>
                        </div>
                    </div>
                </motion.div>}
            </AnimatePresence>
        </div>
    )
}

export default ShopItem