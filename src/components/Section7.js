import React from 'react';
import video from '../assets/coverr-surfing-through-the-ocean-waves-4214-1080p.mp4';

const Section7 = () => {
  return (
    <div className="relative flex flex-col items-center justify-center h-screen text-white mx-6 lg:rounded-lg">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden rounded-lg">
        <video autoPlay loop muted id="video" className="w-full h-full"
          style={{
            objectFit: "cover",
            opacity:"0.8",
            zIndex: -1
          }}>
          <source src={video} type="video/mp4" />
        </video>
      </div>

      <h1 className="z-10 text-center px-4 md:px-0 max-w-full md:max-w-screen-md text-base font-normal font-brandon uppercase tracking-wider mb-4">CLEANING OUR OCEANS WITH EVERY WIPE</h1>
      <h2 className="z-10 text-center px-4 md:px-0 max-w-full md:max-w-screen-md text-6xl font-semibold font-chronicle-display tracking-normal mb-4">Wipes have plastic in them. We don’t.</h2>
      <p className="z-10 text-center px-4 md:px-0 max-w-full md:max-w-screen-md text-md font-brandon font-light tracking-normal mb-8" >We reinvented wipes to cut out all the bad stuff — like single-use plastic that hurts the environment, and toxic chemicals that don’t belong in our oceans (or in our homes).</p>
      <button className="z-10 block bg-white text-dark-green font-bold text-base text-center leading-7 font-brandon tracking-wide uppercase px-6 py-3 rounded-md">LEARN MORE</button>
    </div>
  );
};

export default Section7;