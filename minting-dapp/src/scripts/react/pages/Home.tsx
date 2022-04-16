import React from 'react';
import About from '../About';
import Dapp from '../Dapp';
import Hero2 from '../Hero2';
import HeroSection from '../HeroSection';
import Slider from '../Slider';

function Home() {
  return (
    <>
      <Hero2 />
      <Slider />
      <Dapp />
      <About />
    </>
  );
}

export default Home;
