import React from 'react';
import Image from '../assets/Biom_wipe_2.png';
import Icon from '../assets/Icon ionic-ios-arrow-round-forward.png';

const Section9 = () => {
  return (
    <div className="relative md:w-3/4 w-full mx-auto -mb-32 md:bg-quote-background md:bg-center md:bg-no-repeat bg-cover h-auto md:h-80 rounded-lg" 
         style={{ 
            backgroundImage: `url(${Image})`,
            borderRadius: '14px'
         }}>
      <div className="pl-4 md:pl-20 pt-12 w-full md:w-1/3 h-auto md:h-1/4 text-black">
          <h1 className="font-bold font-chronicle-display text-lg">Get the latest news delivered to your inbox.</h1>
      </div>
      <div className="pl-4 md:pl-20 w-full md:w-1/3 mt-12 md:mt-20 font-brandon text-black">   
          <p className="font-normal w-full md:w-6/7 text-xs mt-2 mb-4">
              Get access to the exciting stuff — exclusive new deals, product launches and more. Plus, get a 10% discount on your next order.
          </p>
          <div className="relative flex items-center">
              <input type="email" placeholder="Enter your email address" className="pl-4 w-full md:w-80 h-12 text-sm rounded-md bg-white text-black" />
              <button className="mx-auto md:ml-6 left-64 h-8 w-8 bg-dark-green rounded-md flex justify-center items-center">
                  <img src={Icon} alt="arrow icon" className="w-4 h-2 mx-auto"/>
              </button>
          </div>
      </div>
    </div>
);
};

export default Section9;