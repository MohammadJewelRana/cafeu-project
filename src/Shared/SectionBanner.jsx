import React from 'react';
// import img1 from '../assets/about/banner2.jpg'
import { FaHome } from "react-icons/fa";
const SectionBanner = ({ pageName, path,image }) => {


    return (
        <div className='mb-12'>

            <div className="relative   bg-cover bg-center  h-56 md:h-72   flex items-center justify-center ">
                {/* Background image */}
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${image})` }}
                />

                {/* Black shadow overlay */}
                <div className="absolute inset-0 bg-black opacity-50 " />

                {/* Content */}
                <div className="absolute inset-0 flex items-center justify-center flex-col text-white p-12">
                    <p className='font-bold text-3xl md:text-4xl my-3 text-center'>  {pageName} </p>
                    <div className='flex gap-2 md:text-xl md:mt-4'>
                    <FaHome className='mt-1 ' />
                        <p className='font-bold  '>Home </p>
                        <p>/</p>
                        <p className='capitalize'>{path}</p>

                    </div>

                </div>
            </div>



        </div>
    );
};

export default SectionBanner;