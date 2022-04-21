import React from 'react';
import About from '../About';
import Dapp from '../Dapp';
import Hero2 from '../Hero2';
import HeroSection from '../HeroSection';
import Marquee from '../Marquee';
import Slider from '../Slider';
import Story from '../Story';

function Home() {
  return (
    <>
      <Hero2 />
      <Marquee
        text=' • Get to know every cryptid as their story unfolds • • Get to know every cryptid as their story unfolds • • Get to know every cryptid as their story unfolds • • Get to know every cryptid as their story unfolds • '
        side='Left'
      />
      <Story />
      <Dapp />
      <About />
    </>
  );
}

export default Home;
