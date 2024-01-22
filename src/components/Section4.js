import React from 'react';
import Image1 from '../assets/Green_1.png';
import Image2 from '../assets/Biom fn .20.png';
import Image3 from '../assets/Black_2.png';

const Section4 = () => {
  return (
    <div className="md:flex md:mt-12 md:px-16 items-center justify-between">
      <div className="md:w-3/12 w-full mb-6 md:mb-0">
        <div className="w-72 h-20 flex flex-wrap content-center">
          <h2 className="text-4xl font-black font-chronicle-display">Ready to start<br/> wiping out waste?</h2>
        </div>
        <button className="mt-4 p-4 w-full bg-white border-2 border-darker-green font-extrabold font-brandon text-sm rounded md:w-auto hover:text-green transition-colors duration-300 ease-in-out flex justify-between items-center">
          <span className="border-r-2 border-darker-green pr-2 text-dark-green flex-grow">CHOOSE YOUR VESSEL COLOR</span>
          <span className="text-darker-green font-bold pl-2">→</span>
        </button>
      </div>
      <div className="grid grid-cols-3 gap-x-8 gap-y-4 w-full h-full">
        <div className="relative group overflow-hidden h-full">
          <img src={Image1} className="md:transition-all md:duration-200 md:ease-linear md:hover:translate-x-20 object-cover h-full translate-y-4" alt="Green" />
          <h3 className="invisible md:visible md:opacity-0 md:group-hover:opacity-100 absolute bottom-0 left-0 text-black text-lg p-2 font-brandon md:transition-all md:duration-300 md:ease-linear">
            <span className="font-chronicle-display font-bold">Biom Dispenser</span>
            <br/>
            OCEAN TEAL
          </h3>
        </div>
        <div className="relative group overflow-hidden h-full">
          <img src={Image2} className="md:transition-all md:duration-200 md:ease-linear md:hover:translate-x-20 object-cover h-full translate-y-4" alt="White" />
          <h3 className="invisible md:visible md:opacity-0 md:group-hover:opacity-100 absolute bottom-0 left-0 text-black text-lg p-2 font-brandon md:transition-all md:duration-300 md:ease-linear">
            <span className="font-chronicle-display font-bold">Biom Dispenser</span>
            <br/>
            WHITE
          </h3>
        </div>
        <div className="relative group overflow-hidden h-full">
          <img src={Image3} className="md:transition-all md:duration-200 md:ease-linear md:hover:translate-x-20 object-cover h-full translate-y-4" alt="Black" />
          <h3 className="invisible md:visible md:opacity-0 md:group-hover:opacity-100 absolute bottom-0 left-0 text-black text-lg p-2 font-brandon md:transition-all md:duration-300 md:ease-linear">
            <span className="font-chronicle-display font-bold">Biom Dispenser</span>
            <br/>
            INK BLACK
          </h3>
        </div>
      </div>   
    </div>
  );
};

export default Section4;