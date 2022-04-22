import React from 'react';
import { ClassificationType } from 'typescript';

const Spotify: React.FC<{}> = () => {
  return (
    <>
      <div className='row mb-4'>
        <div className='col-4'></div>

        <div className='col-4'>
          <iframe
            className='SpotifyWidget'
            src='https://open.spotify.com/embed/album/7K9AAvAktlhFdJEIijkI0L?utm_source=generator'
            width='100%'
            height='380'
            frameBorder='0'
            allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
          ></iframe>
        </div>
        <div className='col-4'></div>
      </div>
    </>
  );
};

export default Spotify;
