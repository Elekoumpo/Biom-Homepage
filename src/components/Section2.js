import React from 'react';
import BackgroundPhoto from '../assets/Mask Group 12.png';
import FirstIcon from '../assets/beautiful design icon.png';
import SecondIcon from '../assets/durable stainless icon.png';
import ThirdIcon from '../assets/non toxic icon.png';

const Section2 = () => {
  return (
    <div className="relative rounded-3xl h-screen w-screen overflow-hidden">
      <img src={BackgroundPhoto} alt="Background" className="absolute h-full w-full object-cover opacity-1" />
      <div className="absolute top-0 -left-32 transform -rotate-90 text-dark-green text-[160px] font-bold animate-slide md:block hidden">
         meet biom
      </div>
      <div className="relative md:mt-28 mt-16 md:ml-32 ml-8 md:pl-184 pt-16">
        <h2 className="text-sm leading-16 tracking-widest text-dark-green font-brandon uppercase md:block hidden">The Biom Dispenser</h2> 
        <h3 className="md:mb-4 mb-2 text-[2.25rem] leading-[2.75rem] font-chronicle-display font-bold text-darker-green text-center md:text-left">
            Redefine your experience of clean. 
        </h3>
        <p className="text-[18px] leading-[28px] w-full md:w-[565px] h-[54px] md:mb-10 mb-8 font-brandon text-darker-green text-center md:text-left" 
        style={{fontSize: '16px', lineHeight: '28px'}}>
            A quality engineered wipes dispenser that looks beautiful in your home, 
            making better habits for your home and planet always within reach.
        </p>
        <div className="md:space-y-8 space-y-4 flex flex-col items-center md:items-start">
            <div className="flex items-center">
              <img src={FirstIcon} alt="Icon 1" className="w-16 h-16" />
              <p className="ml-6 text-lg font-brandon text-darker-green"  style={{fontSize: '16px', lineHeight: '28px'}}>Beautiful design, fit for your home</p>
            </div>
            
            <div className="flex items-center">
              <img src={SecondIcon} alt="Icon 2" className="w-16 h-16" />
              <p className="ml-6 text-lg font-brandon text-darker-green"  style={{fontSize: '16px', lineHeight: '28px'}}>Durable stainless steel exterior</p>
            </div>

            <div className="flex items-center">
              <img src={ThirdIcon} alt="Icon 3" className="w-16 h-16" />
              <p className="ml-6 text-lg font-brandon text-darker-green"  style={{fontSize: '16px', lineHeight: '28px'}}>Non-toxic, BPA free</p>
            </div>
        </div>

        <div className="flex">
           <button className="md:w-44 w-32 md:h-12 h-10 block md:mt-8 mt-6 bg-dark-green hover:bg-hover-section2 text-white rounded-md font-brandon font-semibold text-[13px]">SHOP NOW</button>
       </div>
      </div>
    </div>
  );
};

export default Section2;