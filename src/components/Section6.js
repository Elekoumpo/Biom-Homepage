import React from 'react';
import Image1 from '../assets/AdobeStock_377418446_Preview.png';
import Image2 from '../assets/Refill Packaging_Mockup_2.png';
import Icon1 from '../assets/biodegradable icon.png';
import Icon2 from '../assets/plastic free icon.png';
import Icon3 from '../assets/plant based icon.png';

const Section6 = () => {
  return (
    <div className="relative h-screen mt-16 rounded-lg p-14 mx-auto w-4/5">
      <div className="absolute top-0 left-10 h-155 w-124 object-cover sm:hidden">
        <img src={Image1} alt="description" />
      </div>

      <div className="absolute mt-24 ml-20 top-80 left-80 md:top-34 md:left-50 md:w-64 md:h-64 object-cover sm:hidden"> 
        <img src={Image2} alt="description"/> 
      </div>

      <div className="px-60 mx-auto h-4/5 ml-96 rounded-xl bg-light-green w-2/3">
        <h1 className=" font-normal text-base uppercase font-brandon leading-15 tracking-wider text-primary">BIOM WIPES</h1>
        <h2 className="font-bold text-xl leading-10 font-chronicle-display tracking-normal text-black">Better for you, and the planet.</h2>
        <p className="font-normal text-sm leading-7 font-brandon tracking-normal text-primary mt-2">The experience of clean should feel amazing. In a time when we’re constantly sanitizing, it can be damaging to our hands and skin. We decided to load our wipes with Aloe to take care of you, while you take care of your home.</p>
        
        <div className="flex items-center mt-9">
          <img src={Icon1} alt="description" className="w-17 h-16"/>
          <p className="font-normal text-md leading-6 font-brandon tracking-normal text-black ml-7" style={{fontSize: '16px', lineHeight: '28px'}}>100% biodegradable</p>
        </div>
        
        <div className="flex items-center mt-9">
          <img src={Icon2} alt="description" className="w-17 h-16"/>
          <p className="font-normal text-md leading-6 font-brandon tracking-normal text-black ml-7" style={{fontSize: '16px', lineHeight: '28px'}}>Plastic-free</p>
        </div>
        
        <div className="flex items-center mt-9">
          <img src={Icon3} alt="description" className="w-17 h-16"/>
          <p className="font-normal text-md leading-6 font-brandon tracking-normal text-black ml-7" style={{fontSize: '16px', lineHeight: '28px'}}>100% plant-based</p>
        </div>

        <button className="block mt-24 w-52 h-12 bg-dark-green hover:bg-hover-section2 text-white rounded-md font-brandon font-semibold text-[13px]">SUBSCRIBE NOW</button>
      </div>

    </div>
  );
};

export default Section6;