import React, { useState } from 'react';
import logo from '../assets/logo.svg';
import cartIcon from '../assets/cart.svg';
import menu from '../assets/menu1.png'; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const cartItemCount = 0;

  return (
    <nav className="flex w-full h-16 fixed top-0 left-0 bg-white backdrop-blur-lg items-center px-4 z-10 font-brandon">
      <div className="md:hidden w-full">
        <div className="flex justify-between items-center">
          <div>
            <button onClick={() => setIsOpen(!isOpen)}>
               <img src={menu} alt="Menu" className="h-6 w-6"/>
            </button>
          </div>
          <div>
            <img src={logo} alt="biom logo" className="inline-block"/>
          </div>
          <div>
            <div className="relative flex items-center">
              <img src={cartIcon} alt="cart icon" className="h-6"/>
              <div className="absolute top-0 right-0 w-4 h-4 bg-custom-yellow rounded-full flex items-center justify-center border-white border text-xs">
                {cartItemCount}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden md:flex w-full items-center px-8">
        <h1 className="text-base font-bold tracking-wider uppercase">Shop</h1>
        <h1 className="ml-10 text-base font-bold tracking-wider uppercase">Why Biom</h1>
        <h1 className="ml-10 text-base font-bold tracking-wider uppercase">Scents</h1>

        <div className="flex-grow text-center">
          <img src={logo} alt="biom logo" className="inline-block"/> {/* Here, mt-4 is removed */}
        </div> 

        <h1 className="mr-10 text-base font-bold tracking-wider uppercase">Sign In</h1>
        
        <div className="relative flex items-center mr-10">
          <h1 className="text-base font-bold tracking-wider uppercase pr-2">Cart </h1>
          <img src={cartIcon} alt="cart icon" className="h-6"/>
          <div className="absolute top-0 right-0 w-4 h-4 bg-custom-yellow rounded-full flex items-center justify-center border-white border text-xs">
            {cartItemCount}
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white p-4">
          <button onClick={() => setIsOpen(false)} className="absolute top-2 right-4"></button>
          <div className="mt-16 space-y-4">
            <button className="text-base font-bold tracking-wider uppercase w-full text-left">Shop</button>
            <button className="text-base font-bold tracking-wider uppercase w-full text-left">Why Biom</button>
            <button className="text-base font-bold tracking-wider uppercase w-full text-left">Scents</button>
            <button className="text-base font-bold tracking-wider uppercase w-full text-left">Sign In</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;