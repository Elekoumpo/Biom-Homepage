import React from 'react';
import KitchenImage from '../assets/Kitchen_3@2x.png';

const HeroSection1 = () => {

  return (
    <div className="absolute top-16 bg-center bg-no-repeat bg-cover rounded-lg h-screen w-screen overflow-hidden" style={{ backgroundImage: `url(${KitchenImage})`}}>
      <div className="absolute ml-28 mt-56">
        <h1 className="text-fffa text-8xl font-black">So fresh. So green.</h1>
        <p className="mt-4 text-fffa text-lg">We believe that a more eco-friendly everyday makes a happier you and me. 
        We’re on a mission to put sustainability in reach with better-for-the-planet wipes that are easy, effective, 
        and plastic-free.</p>
      </div>
    </div>
  );
};

export default HeroSection1;