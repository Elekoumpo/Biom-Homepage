import React from 'react';
import Logo from '../assets/biom logo footer.png';
import Insta from '../assets/Icon ionic-logo-instagram.png';
import Facebook from '../assets/Icon awesome-facebook-f.png';

const Footer = () => {
  return (
    <footer className="bg-teal-700 pt-44 py-14 text-black">
        <div className="container mx-auto flex justify-between items-center">
            <div className="flex space-x-6 ml-80 md:block hidden">
                <a href="/" className="uppercase font-brandon font-bold text-white text-sm">SHOP</a>
                <a href="/" className="uppercase font-brandon font-bold text-white text-sm">WHY BIOM</a>
                <a href="/" className="uppercase font-brandon font-bold text-white text-sm">SCENTS</a>
            </div>
            <div className="items-center flex justify-center mx-auto">
                <img src={Logo} alt="Biom Logo" className="px-2" /> 
            </div>
            <div className="flex space-x-8 mr-80 md:block hidden">
                <a href="/" className="uppercase font-brandon font-bold text-white text-sm">FAQS</a>
                <a href="/" className="uppercase font-brandon font-bold text-white text-sm">ACCOUNT</a>
                <a href="/" className="uppercase font-brandon font-bold text-white text-sm">HELP</a>
            </div>
        </div>
        <hr className="border mt-12 ml-24 mr-24 border-dark-green my-6 opacity-50" />
        <div className="flex justify-between items-center px-24 md:flex-row flex-col">
            <p className="text-sm text-white">© 2021 biom. All rights reserved • Privacy Policy • Terms of Service</p>
            <div className="flex space-x-4 items-center sm:hidden">
                <img src={Insta} className="w-8 h-8 bg-white rounded-2xl p-2" alt="Instagram Icon" />
                <img src={Facebook} className="w-7 h-8 bg-white rounded-2xl p-2" alt="Facebook Icon" />
            </div>
        </div>
    </footer>
  );
};

export default Footer;