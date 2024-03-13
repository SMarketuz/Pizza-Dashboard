import Image from 'next/image'
import icon1 from '../../public/Restaurant Location.png'
import icon2 from '../../public/Delivery Scooter.png'
import icon3 from '../../public/Vector.png'
import icon4 from '../../public/Order Discussion.png'
import icon5 from '../../public/24 Hour Food Delivery.png'
import icon6 from '../../public/Bill.png'
import icon7 from '../../public/Setting.png'
import Btn from './btnProps'
export default function Sidebar() {
 return(
    <div className="w-[100%] border h-[100vh]">
        <div className="flex flex-col items-center justify-center">
            <h1 className="md:text-[40px] base:text-[30px] text-center pt-10 font-bold">Go Meal</h1>


            <div className='pt-[50px] flex flex-col gap-3'>
                <Btn img={icon1} text={'Dashboard'} bg={'#F8B602'} tc={'#fff'} />
                <Btn img={icon2} text={'Food Order'} bg={'#fff'} tc={'#A098AE'} />
                <Btn img={icon3} text={'Favorite'} bg={'#fff'} tc={'#A098AE'}/>
                <Btn img={icon4} text={'Message'} bg={'#fff'} tc={'#A098AE'}/>
                <Btn img={icon5} text={'Order History'} bg={'#fff'} tc={'#A098AE'}/>
                <Btn img={icon6} text={'Bills'} bg={'#fff'} tc={'#A098AE'}/>
                <Btn img={icon7} text={'Settings'} bg={'#fff'} tc={'#A098AE'}/>
            </div>

            <div className='w-[252px] h-[202px] mt-5 bgimg'>
                <div className='w-[70%] m-auto pt-6 flex flex-col gap-3'>
                <h1 className='w-[170px] text-white'>Upgrade your Account to Get Free Voucher</h1>
                <button className="btn w-[107px] h-[40px] bg-[#FFFFFF]">Upgrade</button>
                </div>
            </div>
        </div>
    </div>
 )
}