import bakery from '../../public/Baked.png'
import burger from '../../public/Burger.png'
import beverage from '../../public/Coffee.png'
import chicken from '../../public/Chicken.png'
import pizza from '../../public/Fast.png'
import fish from '../../public/Fish.png'
import CategoryProps from './categoryProps'
import PopDishes from './popDishes'
import burger1 from '../../public/image.png'
import burger2 from '../../public/image (1).png'
import burger3 from '../../public/fresh-tasty-burger-2021-08-29-04-51-34-utc 1.png'
import order1 from '../../public/pizza-2021-08-26-17-02-26-utc.png'
import order2 from '../../public/ramen-asian-noodle-in-broth-with-meat-and-ajitama-2021-10-21-04-01-53-utc 1 (1).png'
import order3 from '../../public/plate-of-asian-food-2021-08-26-16-31-39-utc 1.png'
import RecentOrder from './recentOrder'
import { FaChevronRight } from "react-icons/fa";

import { IoChevronForward } from "react-icons/io5";


export default function Category() {
    return (
        <div className='w-[100%]'>
            <div className='flex justify-between items-center py-4'>
                <h1 className='text-[24px] font-[700]'>Category</h1>
                <h1 className='text-[#F8B602] text-[18px] text-[400] flex items-center'>View all<FaChevronRight /></h1>
            </div>
            <div className='flex justify-between base:gap-3 3xl:gap-0 items-center overflow-x-auto scrollbar'>
                <CategoryProps img={bakery} text={'Bakery'} />
                <CategoryProps img={burger} text={'Burger'} />
                <CategoryProps img={beverage} text={'Bevarage'} />
                <CategoryProps img={chicken} text={'Chicken'} />
                <CategoryProps img={pizza} text={'Pizza'} />
                <CategoryProps img={fish} text={'Seafood'} />
            </div>


            <div className='flex justify-between items-center pt-5 pb-4'>
                <h1 className='text-[24px] font-[700]'>Popular Dishes</h1>
                <h1 className='text-[#F8B602] text-[18px] text-[400] flex items-center'>View all<FaChevronRight /></h1>
            </div>
            <div className='flex justify-between items-center base:gap-3 3xl:gap-0 overflow-x-auto scrollbar'>
                <PopDishes img={burger3} text={'Fish burger'} />
                <PopDishes img={burger1} text={'Beef burger'} />
                <PopDishes img={burger2} text={'Cheese burger'} />
            </div>



            <div className='flex justify-between items-center pt-5 pb-4'>
                <h1 className='text-[24px] font-[700]'>Recent Orders</h1>
                <h1 className='text-[#F8B602] text-[18px] text-[400] flex items-center'>View all<FaChevronRight /></h1>
            </div>
            <div className='flex justify-between items-center base:gap-3 3xl:gap-0 overflow-x-auto scrollbar'>
                <RecentOrder img={order1} text={'Italian pizza'} />
                <RecentOrder img={order2} text={'Japan Ramen'} />
                <RecentOrder img={order3} text={'Fried rice'} />
            </div>
            
        </div>
    )
}