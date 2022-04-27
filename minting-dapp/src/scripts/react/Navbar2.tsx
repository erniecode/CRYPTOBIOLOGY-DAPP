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
        <h5 className='NeoSansPro h1Size'>by ethiak</h5>
      </Link>

      <div className='row-form ml-auto'>
        <a
          className='social-icon-link Twitter'
          href='https://twitter.com/Cryptobiology_'
        >
          <img src={TwitterIcon} alt='' className='icons' />
        </a>
        <a
          className='social-icon-link Twitter'
          href='https://twitter.com/Cryptobiology_'
        >
          <img src={DiscordIcon} alt='' className='icons' />
        </a>
        <a
          className='social-icon-link Twitter'
          href='https://twitter.com/Cryptobiology_'
        >
          <img src={OpenseaIcon} alt='' className='icons' />
        </a>
      </div>
    </nav>
  );
};

export default Navbar2;
