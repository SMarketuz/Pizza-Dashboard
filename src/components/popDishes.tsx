"use client"
import Image from 'next/image'
import love1 from '../../public/Love (1).svg'
import love from '../../public/Love.svg'
import rate from '../../public/rate.png'
import { useState } from 'react'
export default function PopDishes({img,text}) {
    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)
    return (
        <div className="base:min-w-[100%] sm:min-w-[337px] h-[363px] bg-white rounded-[8px]">
            <div className="pt-8 flex justify-between items-center">
                <div className="w-[96px] h-[32px] rounded-r-[8px]  bg-[#EB5757] text-[18px] font-[400] text-white flex items-center justify-center">15% Off</div>
                <div className='pr-5'>
                    <button onClick={handleClick} className='bg-transparent border-none hover:bg-transparent'>
                        {show ? 
                    <Image className='img' src={love} alt='love' />:
                    <Image className='img' src={love1} alt='love' /> 
                            }
                    </button>
                    
                </div>
            </div>

            <div className='flex justify-center'>
                <Image src={img} alt='img' />
            </div>

            <div className='flex items-end justify-between w-[90%] m-auto pt-4'>
                <div>
                    <Image src={rate} alt='5 rate' />
                    <h1 className='text-[18px] font-[500]'>{text}</h1>
                    <h1 className='text-[24px] font-[700] text-[black] flex items-center'><h1 className='text-[#F8B602]'>$</h1>5.59</h1>
                </div>
                <button className='btn hover:bg-[#F8B602] w-[48px] h-[48px] rounded-[8px] text-[22px] bg-[#F8B602] text-white font-bold flex items-center justify-center'>+</button>
            </div>
        </div>
    )
}