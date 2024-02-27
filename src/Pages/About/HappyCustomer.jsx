import React from 'react';
import Title from '../../Shared/Title';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';


const HappyCustomer = () => {
    return (
        <div className='my-12'>

            <Title heading={'Our Guestbook'} subHeading={'Happy Customers'}></Title>


            <div className='flex justify-center items-center   '>



                <Swiper
                    spaceBetween={50}
                    slidesPerView={3}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    className=' '
                >
                    <SwiperSlide>Slide 1</SwiperSlide>
                    <SwiperSlide>Slide 2</SwiperSlide>
                    <SwiperSlide>Slide 3</SwiperSlide>
                    <SwiperSlide>Slide 4</SwiperSlide>
                    ...
                </Swiper>

            </div>

        </div>
    );
};

export default HappyCustomer;