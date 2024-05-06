import { motion, AnimatePresence } from 'framer-motion'
import React, { useState } from 'react'
import { MuiTelInput } from 'mui-tel-input'
import Paypal from './Paypal'
function PayForm({ open, setOpen }: { open: boolean, setOpen: React.Dispatch<React.SetStateAction<boolean>> }) {
    const [tel, setTel] = useState('')
    const handleTelChange = (newValue: string) => {
        setTel(newValue)
    }
    const handleChange = (a: 'string', e: React.ChangeEvent<HTMLInputElement>) => {
        setData({
            ...data,
            name: e.target.value
        })
    }
    const [data, setData] = useState({
        name: '',
        zipCode: '',
        country: '',
        email: '',
        adress: ''

    })

    return (
        <>
            {open && <div className='fixed inset-0 bg-black z-[49]  bg-opacity-50' onClick={() => setOpen(false)}></div>}
            <AnimatePresence>
                {open && <motion.div
                    initial={{ x: '100%' }}
                    exit={{ x: '100%' }}
                    animate={{ x: '0' }}
                    className='p-4 flex flex-col items-center gap-4  bottom-0 left-0 md:left-auto  md:top-0 fixed right-0  bg-white z-[60] rounded-l-lg'
                >
                    <h2 className='text-lg font-bold'>Payment</h2>
                    <div className='w-full grid grid-cols-2 z-[10] gap-4 md:gap-y-8 text-gray-600'>
                        <input onChange={e => {
                            setData({
                                ...data,
                                name: e.target.value
                            })
                        }} placeholder='Name ' type="text" className='w-full rounded-lg col  text-base p-4 focus-within:outline-none border  focus-within:border-blue-300 focus-within:shadow-blue-200 border-gray-300 shadow-lg ' /><input
                            onChange={e => {
                                setData({
                                    ...data,
                                    country: e.target.value
                                })
                            }}
                            type='text' className='w-full border-gray-300 rounded-lg text-base p-4 focus-within:outline-none border  focus-within:border-blue-300 focus-within:shadow-blue-200 shadow-lg ' placeholder='City/Country'></input>

                        <input onChange={e => {
                            setData({
                                ...data,
                                email: e.target.value
                            })
                        }} type='email' className='w-full rounded-lg text-base p-4 focus-within:outline-none border col-span-2  md:col-span-1   focus-within:border-blue-300 focus-within:shadow-blue-200 border-gray-300 shadow-lg ' placeholder='Email'></input>
                        <MuiTelInput className='telUi  bg-white w-full rounded-lg  col-span-2  md:col-span-1 focus:outline-none border border-white focus:border-blue-300 focus-within:shadow-blue-200 shadow-lg  text-xs' defaultCountry='US' value={tel} onChange={handleTelChange} />

                        <input type='text' className='w-full rounded-lg text-base p-4 focus-within:outline-none border border-gray-300 focus-within:border-blue-300 focus-within:shadow-blue-200 shadow-lg '
                            onChange={e => {
                                setData({
                                    ...data,
                                    adress: e.target.value
                                })
                            }}
                            placeholder='Address'></input>
                        <input type="text" onChange={e => {
                            setData({
                                ...data,
                                zipCode: e.target.value
                            })
                        }} placeholder='Zip-code' className='w-full rounded-lg text-base p-4 focus-within:outline-none border  focus-within:border-blue-300 focus-within:shadow-blue-200 border-gray-300 shadow-lg ' />
                    </div>
                    <Paypal />
                </motion.div>
                }


            </AnimatePresence>
        </>
    )
}

export default PayForm