import React from 'react';
import About from '../About';
import Dapp from '../Dapp';
import HeroSection from '../HeroSection';
import Slider from '../Slider';

function Home() {
  return (
    <>
      <HeroSection />
      <Slider />
      <Dapp />
      <About />
    </>
  );
}

export default Home;
