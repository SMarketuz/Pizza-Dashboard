import Image from "next/image";
import girl from '../../public/image-of-young-brunette-asian-woman-smiling-and-ho-2021-08-30-02-13-34-utc 1.png'
import Category from "./category";
import { IoBagCheckOutline } from "react-icons/io5";
import Menu from "./menu";
import { FaBarsStaggered } from "react-icons/fa6";
import Sidebar from "./sidebars";
import { GiCancel } from "react-icons/gi";


export default function Main(){
    return(
        <div className="w-[100%] h-[100vh] border bg-[#E5E5E5] overflow-y-scroll no-scrollbar pb-3">
            <div className="w-[90%] m-auto">
                <div className="2xl:pt-[50px] base:pt-[20px] flex justify-between items-center">
                    

                    <div className="base:flex 3xl:hidden items-center sm:gap-3">
                        <div className="drawer relative z-[1000]">
                            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                            <div className="drawer-content">
                                {/* Page content here */}
                                <label htmlFor="my-drawer" className="btn btn-primary drawer-button"><FaBarsStaggered size={'25px'} /></label>
                            </div> 
                            <div className="drawer-side">
                                <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                                <ul className="menu p-4 w-[90%] min-h-full bg-base-200 text-base-content">
                                {/* Sidebar content here */}
                                    <Sidebar />
                                
                                </ul>
                            </div>
                        </div>
                        <div className="flex">
                        <h1 className="text-black font-bold text-[30px] base:hidden sm:flex">Hello,</h1>
                        <h1 className="text-black font-bold text-[30px] base:hidden sm:flex">Petrica</h1>

                        </div>
                    </div>

                    <div className="flex gap-2">
                        
                    <label className="input xl:w-[513px] base:hidden sm:flex base:w-[230px] sm:w-[300px] input-bordered flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="#F8B602" className="w-5 h-5 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                    <input type="search" className="grow " placeholder="Search" />
                    </label>

                    <div className="base:flex 2xl:hidden">
                    <div className="drawer drawer-end relative z-[1000]">
                        
                        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                        <div className="drawer-content">
                            {/* Page content here */}
                            <label htmlFor="my-drawer-4" className="drawer-button btn "><IoBagCheckOutline size={'25px'} /></label>
                        </div> 
                        <div className="drawer-side">
                            <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay "></label>
                            <ul className="menu p-4 min-h-full bg-base-200 text-base-content sidebarr sm:w-[430px] lg:w-[430px]">
                                <label htmlFor="my-drawer-4" aria-label="close sidebar" className="xicon absolute text-red-600 cursor-pointer base:flex sm:hidden"><GiCancel style={{color: 'red'}} /></label>
                            {/* Sidebar content here */}
                                <Menu />
                            </ul>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>

                <div className="bgimg2 w-[100%] lg:h-[240px] base:h-[100%] base:pb-5 base:mt-4 lg:mt-9">
                    <div className="flex items-center xl:justify-between base:min-h-[240px]  base:justify-start w-[90%] m-auto flex-row maindiv">
                        <div className="sm:w-[440px] base:w-[100%] flex flex-col  base:gap-3 xl:gap-0 base:pt-3 sm:pt-0">
                        <h1 className="text-white text-[28px] font-bold sm:w-[330px] base:w-[100%]">Get Discount Voucher Up to 20%</h1>
                        <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. </p>
                        </div>

                        <div className="flex items-end girl xl:flex base:hidden">
                            <Image src={girl} alt="girl" />
                        </div>
                    </div>
                </div>


                <div>
                    <Category />
                </div>
            </div>
        </div>
    )
}