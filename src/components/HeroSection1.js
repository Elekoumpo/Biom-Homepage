import React from 'react';
import KitchenImage from '../assets/Kitchen_3.png';

const HeroSection1 = () => {
  return (
      <div 
          className="relative md:w-full h-screen mx-4 bg-no-repeat bg-cover rounded-xl bg-center" 
          style={{ backgroundImage: `url(${KitchenImage})`, opacity: '1', width: 'calc(100% - 50px)'}} 
      >
          <div className="absolute md:top-56 top-12 md:left-28 left-4">
              <h1 className="md:text-7xl text-4xl md:mt-0 mt-8 font-bold text-white leading-none  font-chronicle-display">So fresh.<br/> So green.</h1>
              <p className="mt-4 text-lg text-light text-white leading-[28px] font-brandon font-normal text-[20px] md:w-1/3 w-full"
                 style={{ letterSpacing: '0px', color: '#FFFAFA', opacity: '1' }}>
                  We believe that a more eco-friendly everyday makes 
                  a happier you and me. We’re on a mission to put
                  sustainability in reach with better-for-the-planet 
                  wipes that are easy, effective, and plastic-free.
              </p>
              <button className="md:w-44 w-32 h-10 mt-8 md:mt-8 bg-white hover:bg-hover-color text-dark-green rounded-md font-semibold font-brandon font-bold">GET STARTED</button>
          </div>
      </div>
  );
};

export default HeroSection1;