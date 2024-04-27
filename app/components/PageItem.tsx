import React from 'react'
import Image from "next/image";
import lego from '@/public/imgs/Lego.png'
import Link from 'next/link';
function PageItem() {
    return (
        <div className='group relative cursor-pointer duration-200 hover:scale-105'>
            <Image priority alt="Lego" className=" duration-200 group-hover:brightness-75" src={lego}></Image>
            <div className=' group-hover:opacity-100 opacity-0 duration-500 text-gray-50 font-bold text-4xl  absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 flex justify-center items-center flex-col gap-8 w-4/5 pt-8'>
                <p>Lego Tag</p>
                <Link href={'/shop'} className='opacity-0 group-hover:opacity-100 delay-500 duration-500 text-sm    border-gray-200  border-dashed px-2 py-1 rounded-md border-2'>Shop</Link>

            </div>
        </div>
    )
}

export default PageItem