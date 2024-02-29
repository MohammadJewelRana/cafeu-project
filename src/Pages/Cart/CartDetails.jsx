import React, { useState } from 'react';
import img1 from '../../assets/menu/11.png'

const CartDetails = () => {

    const [quantity, setQuantity] = useState('');


    const handleQuantityChange = (event) => {
        setQuantity(event.target.value);
    };
    return (
        <div className=' my-24'>


            <div>

                {/* cart table  */}
                <div className="w-full bg-white shadow-md rounded my-6 overflow-auto px-2">
                    <div className="flex flex-col   ">
                        {/* Table Header */}
                        <div className="flex bg-gray-100 px-4 py-2  ">
                            <div className="flex-1  ">Image</div>
                            <div className="flex-1  ">Name</div>
                            <div className="flex-1  ">Price</div>
                            <div className="flex-1  ">Quantity</div>
                            <div className="flex-1  ">Action</div>
                        </div>
                        {/* Table Rows */}
                        <div className="divide-y divide-gray-200">
                            {/* Sample row */}
                            <div className="flex bg-white py-4 px-4">
                                <div className="flex-1  ">
                                    <img className="h-16 w-16 object-cover rounded" src={img1} alt="Product" />
                                </div>
                                <div className="flex-1 ">Product Name</div>
                                <div className="flex-1  ">$10.99</div>
                                <div className="flex-1  ">
                                    <div className=''>
                                        <select className="    border  p-2 bg-white    text-xl" value={quantity} name='selectSize' onChange={handleQuantityChange}>
                                            <option value='1'>1</option>
                                            <option value='2'>2</option>
                                            <option value='3'>3</option>
                                            <option value='4'>4</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="flex-1  ">
                                    <button className="text-red-600">Remove</button>
                                </div>
                            </div>

                            <div className="flex bg-white py-4 px-4">
                                <div className="flex-1  ">
                                    <img className="h-16 w-16 object-cover rounded" src="image.jpg" alt="Product" />
                                </div>
                                <div className="flex-1 ">Product Name</div>
                                <div className="flex-1  ">$10.99</div>
                                <div className="flex-1  ">
                                    <div className=''>
                                        <select className="    border  p-2 bg-white    text-xl" value={quantity} name='selectSize' onChange={handleQuantityChange}>
                                            <option value='1'>1</option>
                                            <option value='2'>2</option>
                                            <option value='3'>3</option>
                                            <option value='4'>4</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="flex-1  ">
                                    <button className="text-red-600">Remove</button>
                                </div>
                            </div>


                            {/* Add more rows as needed */}
                        </div>
                    </div>

                </div>
                <div className='flex justify-between items-center px-2 '>
                    <button className='bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-500 transition-all duration-300'>Continue Shopping</button>

                    <button className='bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-500 transition-all duration-300'>Checkout</button>
                </div>



                {/* discount coupon code and cart total */}

                <div className='mt-24 -mx-32 md:mx-2 flex justify-center flex-wrap md:flex-nowrap gap-12  md:gap-24'>
                    {/* discount  */}
                    <div className='w-1/2'>
                        <h1 className='text-2xl font-semibold mb-4'> Discount Coupon Codes </h1>
                        <p className='text-xl max-w-2xl text-gray-500 text-justify mb-8 '>Enter your coupon code if you have one and get discount up to 50% offer you will get discount with free shipping.</p>

                        <form action="">
                            <div className='flex flex-col gap-4 max-w-2xl'>
                                <input type="text" className='bg-white border text-black px-4 py-6 rounded-md text-xl' placeholder='Enter Your coupon' />
                                <button className='bg-green-600 py-2 px-4 md hover:bg-green-500 transition-all duration-300 rounded-md text-white text-xl'>Apply Coupon</button>
                            </div>
                        </form>
                    </div>

                    {/* total  */}
                    <div className='w-1/2'>

                        <h1 className='text-2xl font-semibold mb-4'>Cart Totals</h1>
                        <div className='border w-full'></div>

                        <div className='flex justify-between text-xl my-4'>
                            <p>Sub Total</p>
                            <p>$10.00</p>
                        </div>
                        <div className='flex justify-between text-xl my-4'>
                            <p>Shipping  </p>
                            <p>$5.00</p>
                        </div>
                        <div className='border w-full'></div>
                        <div className='flex justify-between text-xl my-4'>
                            <p>Total  </p>
                            <p className='text-red-600'>$5.00</p>
                        </div>

                        <div className='flex flex-col justify-center items-center gap-4'>
                            <p className='mt-4'>Checkout with multiple items</p>
                            <button className='bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-500 transition-all duration-300'>Checkout</button>
                        </div>

                    </div>
                </div>




            </div>
        </div>
    );
};

export default CartDetails;