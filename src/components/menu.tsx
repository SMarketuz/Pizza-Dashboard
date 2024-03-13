import icon1 from '../../public/Order Discussion.png'
import icon2 from '../../public/notification.png'
import icon3 from '../../public/Setting.png'
import man from '../../public/placeholder.png'
import income from '../../public/Income.png'
import profit from '../../public/Profit.png'
import pizza from '../../public/pizza-2021-08-26-17-02-26-utc.png'
import burger from '../../public/fresh-tasty-burger-2021-08-29-04-51-34-utc 1.png'
import pizza2 from '../../public/Mask Group2.png'
import icon from '../../public/icon.png'
import Image from 'next/image'
import { GrLocation } from "react-icons/gr";
import Order from './order'
import { FaRightFromBracket } from 'react-icons/fa6'
import { FaChevronRight } from "react-icons/fa";


export default function Menu() {
    return (
        <div className="w-[100%] overflow-y-scroll no-scrollbar h-[100vh] pb-4">
            <div className="w-[90%] m-auto pt-[40px]">
                <div className='flex items-center justify-between'>
                    <div className='flex items-center'>   
                        <Image src={icon1} alt='icon' />
                        <Image src={icon2} alt='icon' />
                        <Image src={icon3} alt='icon' />
                    </div>
                    <div><Image src={man} alt='man' /></div>
                </div>

                <div className='pt-7'>
                    <h1 className='text-[24px] font-[700] text-black'>Your binance</h1>
                    <div className='binancebg w-[375px] h-[165px] mt-4 '>
                        <div className='w-[85%] m-auto flex items-center justify-between min-h-[165px]'>
                            <div className='w-[160px] h-[101px] rounded-[16px] bg-[#FFFFFF] flex flex-col items-start justify-center pl-2'>
                                <h1 className='text-[#2E2E2E] text-[14px] font-[400]'>Binance</h1>
                                <h1 className='text-[32px] font-bold'>$12.000</h1>
                            </div>

                            <div>
                                <div className='flex items-center coll gap-3'>
                                        <div className='flex flex-col'>
                                        <div className='w-[56px] h-[56px] rounded-[16px] bg-[#fff] flex items-center justify-center'>
                                            <Image src={income} alt='up' /> </div>
                                            <h1 className='text-[14px] font-[400] text-white'>Top Up</h1>
                                        </div>
                                        <div className='flex flex-col'>
                                        <div className='w-[56px] h-[56px] rounded-[16px] bg-[#fff] flex items-center justify-center'>
                                            <Image src={profit} alt='up' /> </div>
                                            <h1 className='text-[14px] font-[400] text-white'>Transfer</h1>
                                        </div>
                                </div>
                                <div className='flex items-center'>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col gap-2'>
                    <h1 className='text-[#A098AE] text-[18px] font-[400]'>Your Address</h1>

                    <div className='flex items-center justify-between'>
                        <h1 className='text-[#000] text-[18px] font-[700] flex items-center gap-1'><GrLocation style={{color: '#F8B602'}} /> Elm Street, 23</h1>
                        <button className='w-[95px] h-[32px] border-[#F8B602] border rounded-[8px] text-[#F8B602] font-[normal]'>Change</button>
                    </div>
                    <h1 className='text-[#A098AE] text-[14px] font-[normal]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. </h1>
                    <div className='flex items-center gap-3'>
                        <button className='w-[120px] h-[32px] text-[14px] border-[#A098AE] border rounded-[8px]  text-[#A098AE] font-normal'>Add Details</button>
                        <button className='w-[100px] h-[32px] text-[14px] border-[#A098AE] border rounded-[8px]  text-[#A098AE] font-normal'>Add Notes</button>
                    </div>
                </div>

                {/* order menu */}
                <div className='pt-4'>
                    <h1 className='text-[24px] font-semibold'>Order Menu</h1>
                    <div className='flex flex-col gap-1'>
                        <Order img={pizza} text={'Pepperoni Pizza'} />
                        <Order img={burger} text={'Cheese Burger'} />
                        <Order img={pizza2} text={'Vegan Pizza'} />
                    </div>
                    <hr className='py-3' />
                    <div className='flex items-center justify-between pb-3'>
                        <h1 className='text-[14px font-normal] text-[#A098AE]'>Service</h1>
                        <h1 className='text-[18px] font-medium text-black flex items-center'>+<p className='text-[#F8B602]'>$</p>1.00</h1>
                    </div>
                    <div className='flex items-center justify-between'>
                        <h1 className='text-[18px] font-medium'>Total</h1>
                        <h1 className='text-[18px] font-medium text-black flex items-center'><p className='text-[#F8B602]'>$</p>202.00</h1>
                    </div>

                    <div className='pt-3 flex flex-col gap-3'>
                        <button className='sm:w-[375px] base:w-[100%] h-[64px] border border-[#F8B602] flex items-center justify-center gap-2 font-medium bg-[#F5F5F5] rounded-[8px]'>
                            <Image src={icon} alt='icon' />
                            <h1 className='flex items-center gap-2'>Hav u cupon code?   <FaChevronRight /></h1>
                        </button>
                        <button className='sm:w-[375px] base:w-[100%] h-[64px] bg-[#F8B602] rounded-[8px]'>
                            <h1 className='text-[18px]  font-medium text-white'>Checkout</h1>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}