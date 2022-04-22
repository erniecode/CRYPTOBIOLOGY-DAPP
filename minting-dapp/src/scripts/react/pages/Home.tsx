import React from 'react';
import About from '../About';
import Dapp from '../Dapp';
import Hero2 from '../Hero2';
import HeroSection from '../HeroSection';
import Marquee from '../Marquee';
import Slider from '../Slider';
import Spotify from '../Spotify';
import Story from '../Story';

function Home() {
  return (
    <>
      <Hero2 />
      <Marquee
        text=' • Get to know every cryptid as their story unfolds • '
        side='Left'
        icon='fa fa-fire'
      />
      <Story />
      <Marquee
        text=' • Start tuning into the cryptid world on Spotify • '
        side='Right'
        icon='fa fa-brands fa-spotify'
      />
      <Spotify />
      <Dapp />
      <About />
    </>
  );
}

export default Home;
