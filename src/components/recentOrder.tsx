"use client"
import Image from 'next/image'
import love1 from '../../public/Love (1).svg'
import love from '../../public/Love.svg'
import rate from '../../public/rate.png'
import { useState } from 'react'
export default function RecentOrder({img, text}) {
    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)
    return (
        <div className="base:min-w-[100%] sm:min-w-[337px] h-[363px] bg-white rounded-[8px]">
            <div className="w-[90%] m-auto">
                <div className='flex justify-end pt-10'>
                <button onClick={handleClick} className='bg-transparent border-none hover:bg-transparent'>
                        {show ? 
                    <Image className='img' src={love} alt='love' />:
                    <Image className='img' src={love1} alt='love' /> 
                            }
                    </button>
                </div>

            <div className='flex justify-center'>
                <Image src={img} alt='img' />
            </div>

            <div className='flex items-center justify-center pt-4'>
                <div>
                    <h1 className='text-[18px] font-[500] text-center'>{text}</h1>
                    <h1 className='text-[24px] text-center font-[700] text-[black] flex text-center'><h1 className='text-[#F8B602]'>$</h1>5.59</h1>
                    <p className="text-[#A098AE] text-center text-[18px] font-[400]">4.97km 21px</p>
                </div>
            </div>
            </div>
        </div>
    )
}