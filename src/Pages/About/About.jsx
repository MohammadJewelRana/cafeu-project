import React from 'react';
import WhyBest from './WhyBest';
import Banner from './Banner';
import Team from './Team';
import HappyCustomer from './HappyCustomer';

const About = () => {
    return (
        <div className='mt-32'>
  

  <HappyCustomer></HappyCustomer>
            <WhyBest></WhyBest>
            <Banner></Banner>
            <Team></Team>
        </div>
    );
};

export default About;