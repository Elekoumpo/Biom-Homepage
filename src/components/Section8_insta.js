import React from 'react';
import Image1 from '../assets/AdobeStock_372350085_Preview.png';
import Image2 from '../assets/Biom_wipe_6.png';
import Image3 from '../assets/kitchen_counter_low res.png';
import Image4 from '../assets/Green-Gold-and-Navy-Living_Kitty-and-B-by-Kat-G.png';
import Image5 from '../assets/Biom fn .23.png';
import Icon from '../assets/Icon awesome-instagram.png';
import { Carousel } from 'react-responsive-carousel';

const CarouselItem = ({ image, altText, index }) => (
  <div className="flex items-center justify-center mr-2 ml-2" style={index % 2 === 0 ? { marginTop: '20px'} : { marginTop: '0px' }}>
    <img src={image} alt={altText} className="object-cover w-full h-full"/>
  </div>
);

const Section8 = () => {
  const images = [Image1, Image2, Image3, Image4, Image5];
  return (
    <div className="pt-10 pb-4 mb-14">
      <h1 className="text-center font-bold font-chronicle-display text-darker-green text-xl mb-10">#cleanwithbiom</h1>
      <Carousel showThumbs={false} infiniteLoop autoPlay showStatus={false} emulateTouch showArrows={false} centerMode showIndicators={false} centerSlidePercentage={20}>
        {images.map((image, index) => <CarouselItem image={image} altText={`Image ${index + 1}`} key={`carousel-item-${index}`} index={index} />)}
      </Carousel>
      <button className="block w-69 h-12 border-primary border-black border border-solid rounded-md text-primary font-bold text-base leading-7 tracking-wide uppercase mx-auto mt-8 flex justify-between items-center">
  <span className="text-darker-green font-brandon border-r m-2 text-sm border-black pr-2">
    FOLLOW US ON INSTAGRAM
  </span>
  <img src={Icon} alt="instagram icon" className="inline w-4 mr-2"/>
</button>
    </div>
  );
};

export default Section8;