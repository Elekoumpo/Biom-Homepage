import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.css';
import Navbar from './components/Navbar';
import HeroSection1 from './components/HeroSection1';
import Section2 from './components/Section2';
import Section3 from './components/Section3';
import Section4 from './components/Section4';
import Section5 from './components/Section5';
import Section6 from './components/Section6';
import Section7 from './components/Section7';
import Section8 from './components/Section8_insta';
import Section9 from './components/Section9_1';
import Footer from './components/Section9_Footer';

const Home = () => {
return(
  <div className="pt-16">
  <Navbar />
  <HeroSection1 />
  <Section2 />
  <Section3 />
  <Section4 />
  <Section5 />
  <Section6 />
  <Section7 />
  <Section8 />
  <Section9 />
  <Footer />
  </div>

);
};

ReactDOM.render(
  <React.StrictMode>
    <Home /> 
  </React.StrictMode>,
  document.getElementById('root')
);
