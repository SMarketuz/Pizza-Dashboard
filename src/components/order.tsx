import Image from 'next/image'
import pizza from '../../public/pizza-2021-08-26-17-02-26-utc.png'
export default function Order({img, text}) {
    return (
        <div className="sm:w-[375px] base:w-[100%] h-[80px] flex items-center justify-between">
            <div className='flex items-center gap-2'>
                <Image className='w-[80px] h-[80px]' src={img} alt='pizza' />
                <div className='flex flex-col'>
                    <h1 className='text-[18px] font-semibold'>{text}</h1>
                    <h1 className='text-[#A098AE] text-[14px]'>1x</h1>
                </div>
            </div>

            <div>
                <h1 className='text-[18px] font-medium text-black flex items-center'>+<p className='text-[#F8B602]'>$</p>5.59</h1>
            </div>
        </div>
    )
}