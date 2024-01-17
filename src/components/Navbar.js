import React from 'react';
import logo from '../assets/logo.svg';
import cartIcon from '../assets/cart.svg';

const Navbar = () => {
  const cartItemCount = 0;

  return (
    <nav className="flex w-full h-16 fixed top-0 left-0 bg-white backdrop-blur-lg items-center px-8 z-10">
      <h1 className="text-base font-bold tracking-wider uppercase">Shop</h1>
      <h1 className="ml-10 text-base font-bold tracking-wider uppercase">Why Biom</h1>
      <h1 className="ml-10 text-base font-bold tracking-wider uppercase">Scents</h1>

      <div className="flex-grow text-center">
        <img src={logo} alt="biom logo" className="mt-4 inline-block"/>
      </div>
      
      <h1 className="mr-10 text-base font-bold tracking-wider uppercase">Sign In</h1>
      <h1 className="mr-10 text-base font-bold tracking-wider uppercase">Cart</h1>
      
      <div className="relative">
        <img src={cartIcon} alt="cart icon" className="h-6"/>
        <div className="absolute top-0 right-0 w-4 h-4 bg-custom-yellow rounded-full flex items-center justify-center border-white border text-xs">
          {cartItemCount}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;