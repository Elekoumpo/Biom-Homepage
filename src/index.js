import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.css';
import Navbar from './components/Navbar';
import HeroSection1 from './components/HeroSection1';

const Home = () => {
return(
  <div className="pt-16">
  <Navbar />
  <HeroSection1 />
  </div>

);
};

ReactDOM.render(
  <React.StrictMode>
    <Home /> 
  </React.StrictMode>,
  document.getElementById('root')
);
