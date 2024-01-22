import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import React from 'react';
import Image1 from '../assets/Living Room_1.png';
import Image2 from '../assets/office.png';
import Image3 from '../assets/Kitchen Shot_3.png';

const Section3 = () => {
  return (
    <div className="relative md:mt-12 h-96">
      <div className="hidden md:flex md:overflow-x-hidden w-screen h-96">
        <div className="group sm:w-2/12 min-w-max rounded-r-xl relative">
          <div className="overflow-hidden h-full rounded-r-xl">
            <img src={Image1} className="transform transition-all duration-500 group-hover:scale-110 object-cover w-full h-full" alt="Living Room" />
          </div>
          <p className="opacity-0 transition-all group-hover:opacity-100 absolute bottom-5 left-1/2 transform -translate-x-1/2 font-chronicle-display text-white text-bold text-2xl text-center">living room</p>
        </div>
        <div className="group sm:w-5/12 min-w-max mx-6 relative overflow-hidden">
          <div className="overflow-hidden h-full rounded-xl">
            <img src={Image2} className="transform transition-all duration-500 group-hover:scale-110 object-cover w-full h-full" alt="Office" />
          </div>
          <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-center text-white">
              <p className="mb-1 font-brandon uppercase tracking-wider font-normal bg-opacity-70 px-4 py-1 rounded">WHERE YOU NEED IT,</p>
              <p className="text-8xl font-chronicle-display font-black">when you need it.</p>
          </div>
          <p className="opacity-0 transition-all group-hover:opacity-100 absolute bottom-5 left-1/2 transform -translate-x-1/2 font-chronicle-display text-white text-bold text-2xl text-center">office</p>
        </div>
        <div className="group sm:w-3/12 min-w-max rounded-l-xl relative overflow-hidden">
          <div className="overflow-hidden h-full rounded-l-xl">
            <img src={Image3} className="transform transition-all duration-500 group-hover:scale-110 object-cover w-full h-full" alt="Kitchen" />
          </div>
          <p className="opacity-0 transition-all group-hover:opacity-100 absolute bottom-5 left-1/2 transform -translate-x-1/2 font-chronicle-display text-white text-bold text-2xl text-center">kitchen</p>
        </div>
      </div>
      <div className="w-full md:hidden">
        <Carousel showThumbs={false} infiniteLoop={true} useKeyboardArrows={true} autoPlay={true} transitionTime={250} showStatus={false} showArrows={false} showIndicators={false} >
          <div key='0' className="h-full rounded-xl">
            <img src={Image1} alt="living room" className="object-cover w-full h-full" />
            <p className="w-full py-2 bg-opacity-50 absolute bottom-0 text-white text-center font-chronicle-display font-bold">living room</p>
          </div>
          <div key='1' className="h-full rounded-xl">
            <img src={Image2} alt="office" className="object-cover w-full h-full" />
            <p className="w-full py-2 bg-opacity-50 absolute bottom-0 text-white text-center font-chronicle-display font-bold">office</p>
          </div>
          <div key='2' className="h-full rounded-xl">
            <img src={Image3} alt="kitchen" className="object-cover w-full h-full" />
            <p className="w-full py-2 bg-opacity-50 absolute bottom-0 text-white text-center font-chronicle-display font-bold">kitchen</p>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Section3;