import Image from 'next/image'
import React from 'react'
import lego from '@/public/imgs/Lego.png'
function ShopBoja({ t, setT, i }: { t?: boolean, setT: React.Dispatch<React.SetStateAction<number>>, i: number }) {
    return (
        <div onClick={() => setT(i)} className={` py-1  cursor-pointer min-w-12  ${t ? 'border-b-2 border-b-orange-400' : ''} `}>

            <Image alt='' className=' w-full' src={lego}></Image>
        </div>
    )
}

export default ShopBoja