import React from 'react';
import HappyCustomer from '../About/HappyCustomer';
import Team from '../About/Team';
import Banner3 from '../About/Banner3';
import WhyBest from '../About/WhyBest';
import Features from './Features';
import BannerHome from './BannerHome';

const Home = () => {
    return (
        <div className='mt-32'>


            <Features></Features>
            <BannerHome></BannerHome>
            <WhyBest></WhyBest>

            <Banner3></Banner3>
        
            <Team></Team>
            <HappyCustomer></HappyCustomer>
            

        </div>
    );
};

export default Home;      