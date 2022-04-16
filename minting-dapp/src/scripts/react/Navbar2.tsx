import React from 'react';
import { Link } from 'react-router-dom';
import eLogo from '../../images/ethiak.jpg';
import TwitterIcon from '../../images/twitter.png';
import DiscordIcon from '../../images/discord.png';
import OpenseaIcon from '../../images/Opensea.png';

const Navbar2: React.FC<{}> = () => {
  return (
    <nav className='navbar2'>
      <Link to='/' className='navbar-logo'>
        <img src={eLogo} alt='' className='logo2' />
        <h5 className='NeoSansPro'>by ethiak</h5>
      </Link>

      <div className='row-form ml-auto'>
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
    </nav>
  );
};

export default Navbar2;
