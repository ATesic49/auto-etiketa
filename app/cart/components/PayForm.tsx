import { motion, AnimatePresence } from 'framer-motion'
import React, { useState } from 'react'
import { MuiTelInput } from 'mui-tel-input'
import Paypal from './Paypal'
function PayForm({ open, setOpen }: { open: boolean, setOpen: React.Dispatch<React.SetStateAction<boolean>> }) {
    const [tel, setTel] = useState('')
    const handleTelChange = (newValue: string) => {
        setTel(newValue)
    }
    return (
        <>
            {open && <div className='fixed inset-0 bg-black z-[49]  bg-opacity-50' onClick={() => setOpen(false)}></div>}
            <AnimatePresence>
                {open && <motion.div
                    initial={{ x: '100%' }}
                    exit={{ x: '100%' }}
                    animate={{ x: '0' }}
                    className='p-4 flex flex-col items-center gap-4  bottom-0 top-0 fixed right-0 bg-white z-[60] rounded-l-lg'
                >
                    <h2 className='text-lg font-bold'>Payment</h2>
                    <div className='w-full grid grid-cols-2 z-[10] gap-4 gap-y-8 text-gray-600'>
                        <input placeholder='Ime ' type="text" className='w-full rounded-lg col  text-base p-4 focus-within:outline-none border  focus-within:border-blue-300 focus-within:shadow-blue-200 border-gray-300 shadow-lg ' />
                        <input type="text" placeholder='Prezime' className='w-full rounded-lg text-base p-4 focus-within:outline-none border  focus-within:border-blue-300 focus-within:shadow-blue-200 border-gray-300 shadow-lg ' />
                        <input type='email' className='w-full rounded-lg text-base p-4 focus-within:outline-none border  focus-within:border-blue-300 focus-within:shadow-blue-200 border-gray-300 shadow-lg ' placeholder='Email'></input>
                        <MuiTelInput className='telUi  bg-white w-full rounded-lg   focus:outline-none border border-white focus:border-blue-300 focus-within:shadow-blue-200 shadow-lg  text-xs' defaultCountry='US' value={tel} onChange={handleTelChange} />
                        <input type='text' className='w-full border-gray-300 rounded-lg text-base p-4 focus-within:outline-none border  focus-within:border-blue-300 focus-within:shadow-blue-200 shadow-lg ' placeholder='City/Country'></input>
                        <input type='text' className='w-full rounded-lg text-base p-4 focus-within:outline-none border border-gray-300 focus-within:border-blue-300 focus-within:shadow-blue-200 shadow-lg ' placeholder='Address'></input>
                    </div>
                    <Paypal />
                </motion.div>
                }


            </AnimatePresence>
        </>
    )
}

export default PayForm