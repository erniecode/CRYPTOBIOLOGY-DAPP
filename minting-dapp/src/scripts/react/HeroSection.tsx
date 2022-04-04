import React, { useRef } from 'react';
import { Button } from './Button';
import eVideo from '-!file-loader!../../assets/videos/starsVideo.mp4';
import TwitterIcon from '../../images/twitter.png';
import DiscordIcon from '../../images/discord.png';
import OpenseaIcon from '../../images/Opensea.png';
import { Link } from 'react-router-dom';

function HeroSection() {
  const video = useRef<HTMLVideoElement>(null!);
  return (
    <div className='hero-container'>
      <video src={eVideo} autoPlay loop playsInline muted ref={video} />

      <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p>
      <div className='hero-btns'>
        <Button buttonStyle='btn--outline' buttonSize='btn--large'>
          CONNECT WALLET
        </Button>
        <Button buttonStyle='btn--primary' buttonSize='btn--large'>
          WATCH TRAILER <i className='far fa-play-circle'></i>
        </Button>
      </div>
      <div className='row-form'>
        <Link
          className='social-icon-link Twitter'
          to='/'
          target='_blank'
          aria-label='Twitter'
        >
          <img src={TwitterIcon} alt='' className='icons' />
        </Link>
        <Link
          className='social-icon-link Twitter'
          to='/'
          target='_blank'
          aria-label='Twitter'
        >
          <img src={DiscordIcon} alt='' className='icons' />
        </Link>
        <Link
          className='social-icon-link Twitter'
          to='/'
          target='_blank'
          aria-label='Twitter'
        >
          <img src={OpenseaIcon} alt='' className='icons' />
        </Link>
      </div>
    </div>
  );
}

export default HeroSection;
