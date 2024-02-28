import React from 'react';
import MenuTItle from './MenuTItle';
import img1 from '../../assets/menu/1.png'

const MenuCard = ({ menuData, heading, backgroundColor }) => {


    console.log(menuData, backgroundColor);
 

    return (
        <div className={`bg-${backgroundColor} p-4 `}>
 

            {/* ///////////////////////////////////////////////////////////////////// 

            {/* ///////////////////////////////////////////////////////////////////////////// */}
















            <MenuTItle heading={heading} ></MenuTItle>

            {/* <div className='flex flex-wrap md:flex-nowrap items-center justify-center gap-4 '> */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-12 place-items-center md:mx-12 mb-12'>
    {menuData.map((item, index) => (
        <div key={index} className='w-full md:w-auto'>
            <div className='flex gap-8 items-center p-2 md:p-4 border mx-12 shadow-md rounded-md justify-start'>
                <div>
                    <img className='h-28 w-32 rounded' src={img1} alt="" />
                </div>
                <div>
                    <div className='flex justify-between items-center'>
                        <h1 className='md:text-xl font-bold'>{item.name}</h1>
                        <h1 className='md:text-xl font-bold'>${item.price}</h1>
                    </div>
                    <p className='text-gray-600 text-[10px] md:text-[12px] py-1'>{item.detailsDescription}</p>
                    <button className='outline-none border-b-2 border-b-blue-500 font-bold text-[10px] md:text-[12px] text-blue-600'>ADD TO CART</button>
                </div>
            </div>
        </div>
    ))}
</div>




            {/* <div className='grid grid-cols-1 md:grid-cols-2 gap-4 place-items-center mx-12'>
                <div className='flex gap-8 items-center p-2 md:p-4 border mx-2 shadow-md rounded-md '>
                    <div >
                        <img className=' h-28 w-32 rounded' src={img1} alt="" />
                    </div>
                    <div className='  '>
                        <div className='flex justify-between items-center'>
                            <h1 className='md:text-xl font-bold'> MARGHERITA PIZZA </h1>
                            <h1 className='md:text-xl font-bold'>$ 12.00 </h1>
                        </div>
                        <p className='text-gray-600 py-1'>A classic Margherita pizza topped with ripe tomatoes and fresh mozzarella </p>
                        <button className='  outline-none border-b-2 border-b-blue-500 font-bold text-[10px] md:text-[12px] text-blue-600'>ADD TO CART</button>
                    </div>
                </div>
            </div> */}


        </div>
    );
};

export default MenuCard;