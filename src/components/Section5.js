import React from "react";
import { Carousel } from "react-responsive-carousel";
import "../carousel.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Section5 = () => {
  return (
    <Carousel
      className="carousel w-full inline-block md:w-5/6 xl:w-2/3 mx-auto overflow-hidden"
      showThumbs={false}
      infiniteLoop
      useKeyboardArrows={false}
      autoPlay
      showStatus={false}
      showIndicators={true}
      showArrows={false}
    >
      <div className="bg-quote-background p-8 md:p-4" style={{height: '450px'}}>
        <h1 className="text-center text-darker-green font-brandon font-medium text-md mt-8" style={{fontSize: '14px', lineHeight: '28px'}}>WHAT PEOPLE ARE SAYING</h1>
        <blockquote className="block mx-auto text-center font-chronicle-display font-bold text-darker-green md:text-5xl mt-16 mb-8 px-4 md:px-20 xl:px-32 w-full md:w-1/2">
          “Cleaning and sanitizing are now more important than ever and these wipes make it so easy. They’re great because they don’t dry my skin out and I love knowing that buying their products are better for the environment.”
        </blockquote>
        <h4 className="text-center text-darker-green font-brandon font-medium text-md mt-8" style={{fontSize: '13px', lineHeight: '28px'}}>- RACHAEL H.</h4>
      </div>
      <div className="bg-quote-background p-8 md:p-4" style={{height: '450px'}}>
        <h1 className="text-center text-darker-green font-brandon font-medium text-md mt-8" style={{fontSize: '14px', lineHeight: '28px'}}>WHAT PEOPLE ARE SAYING</h1>
        <blockquote className="block mx-auto text-center font-chronicle-display font-bold text-darker-green md:text-5xl mt-16 mb-8 px-4 md:px-20 xl:px-32 w-full md:w-1/2">
          “Cleaning and sanitizing are now more important than ever and these wipes make it so easy. They’re great because they don’t dry my skin out and I love knowing that buying their products are better for the environment.”
        </blockquote>
        <h4 className="text-center text-darker-green font-brandon font-medium text-md mt-8" style={{fontSize: '13px', lineHeight: '28px'}}>- RACHAEL H.</h4>
      </div>
      <div className="bg-quote-background p-8 md:p-4" style={{height: '450px'}}>
        <h1 className="text-center text-darker-green font-brandon font-medium text-md mt-8" style={{fontSize: '14px', lineHeight: '28px'}}>WHAT PEOPLE ARE SAYING</h1>
        <blockquote className="block mx-auto text-center font-chronicle-display font-bold text-darker-green md:text-5xl mt-16 mb-8 px-4 md:px-20 xl:px-32 w-full md:w-1/2">
          “Cleaning and sanitizing are now more important than ever and these wipes make it so easy. They’re great because they don’t dry my skin out and I love knowing that buying their products are better for the environment.”
        </blockquote>
        <h4 className="text-center text-darker-green font-brandon font-medium text-md mt-8" style={{fontSize: '13px', lineHeight: '28px'}}>- RACHAEL H.</h4>
      </div>
      <div className="bg-quote-background p-8 md:p-4" style={{height: '450px'}}>
        <h1 className="text-center text-darker-green font-brandon font-medium text-md mt-8" style={{fontSize: '14px', lineHeight: '28px'}}>WHAT PEOPLE ARE SAYING</h1>
        <blockquote className="block mx-auto text-center font-chronicle-display font-bold text-darker-green md:text-5xl mt-16 mb-8 px-4 md:px-20 xl:px-32 w-full md:w-1/2">
          “Cleaning and sanitizing are now more important than ever and these wipes make it so easy. They’re great because they don’t dry my skin out and I love knowing that buying their products are better for the environment.”
        </blockquote>
        <h4 className="text-center text-darker-green font-brandon font-medium text-md mt-8" style={{fontSize: '13px', lineHeight: '28px'}}>- RACHAEL H.</h4>
      </div>
    </Carousel>
  );
};

export default Section5;