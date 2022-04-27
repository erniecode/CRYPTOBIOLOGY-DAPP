import React from 'react';
import NFT1 from '../../assets/NFTs/nft1.jpeg';
import NFT2 from '../../assets/NFTs/nft2.jpeg';
import NFT3 from '../../assets/NFTs/nft3.jpeg';
import NFT4 from '../../assets/NFTs/nft4.jpeg';
import NFT5 from '../../assets/NFTs/nft5.jpeg';
import NFT6 from '../../assets/NFTs/nft6.jpeg';
import NFT7 from '../../assets/NFTs/nft7.jpeg';
import Devsity from '../../assets/TeamMembers/Devsility.png';
import ale from '../../assets/TeamMembers/AlejandroGarcia.jpg';
import alfonso from '../../assets/TeamMembers/AlfonsoLopez.jpg';
import dario from '../../assets/TeamMembers/DarioRocha.jpg';
import neto from '../../assets/TeamMembers/ErnestoSosa.jpg';
import laz from '../../assets/TeamMembers/LazaroLopez.jpg';
import maganni from '../../assets/TeamMembers/Maganni.jpg';
import mario from '../../assets/TeamMembers/MarioPaz.jpg';
import oscar from '../../assets/TeamMembers/OscarElizarraras.jpg';

function Team() {
  return (
    <div className='justify-content-center'>
      <div className='container'>
        <div className='HeaderTeam w3-center'>
          <h1 className='HeaderTeam NeoSansPro'>MEET OUR TEAM</h1>
        </div>
        <br />
        <div className='row'>
          <div className='col-md-3 mb-3'>
            <div className='flip-card'>
              <div className='flip-card-inner'>
                <div className='flip-card-front'>
                  <img className='Avatar' src={NFT1} alt='Avatar' />
                </div>
                <div className='flip-card-back'>
                  <img
                    className='AvatarBack w3-opacity'
                    src={dario}
                    alt='Avatar'
                  />
                  <div className='w3-display-bottommiddle w3-large'>
                    <h1>Dario Rocha</h1>
                    <p>Founder & CEO</p>
                    <p className='w3-text-yellow'>doctorchorizo.eth</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-3 mb-3'>
            <div className='flip-card'>
              <div className='flip-card-inner'>
                <div className='flip-card-front'>
                  <img className='Avatar' src={NFT2} alt='Avatar' />
                </div>
                <div className='flip-card-back'>
                  <img
                    className='AvatarBack w3-opacity'
                    src={ale}
                    alt='Avatar'
                  />
                  <div className='w3-display-bottommiddle w3-large'>
                    <h1>Alejandro Garcia</h1>
                    <p>Marketing Strategiest</p>
                    <p className='w3-text-yellow'>elcoyote.eth </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-3 mb-3'>
            <div className='flip-card'>
              <div className='flip-card-inner'>
                <div className='flip-card-front'>
                  <img className='Avatar' src={NFT3} alt='Avatar' />
                </div>
                <div className='flip-card-back'>
                  <img
                    className='AvatarBack w3-opacity'
                    src={alfonso}
                    alt='Avatar'
                  />
                  <div className='w3-display-bottommiddle w3-large'>
                    <h1>Alfonso Lopez </h1>
                    <p>Community Manager</p>
                    <p className='w3-text-yellow'>mexiblack.eth</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-3 mb-3'>
            <div className='flip-card'>
              <div className='flip-card-inner'>
                <div className='flip-card-front'>
                  <img className='Avatar' src={NFT4} alt='Avatar' />
                </div>
                <div className='flip-card-back'>
                  <img
                    className='AvatarBack w3-opacity'
                    src={laz}
                    alt='Avatar'
                  />
                  <div className='w3-display-bottommiddle w3-large'>
                    <h1>Lazaro Lopez</h1>
                    <p>Project Management</p>
                    <p className='w3-text-yellow'>cryptopiper.eth</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <div className='row'>
          <div className='col-md-3 mb-3'>
            <div className='flip-card'>
              <div className='flip-card-inner'>
                <div className='flip-card-front'>
                  <img className='Avatar' src={NFT5} alt='Avatar' />
                </div>
                <div className='flip-card-back'>
                  <img
                    className='AvatarBack w3-opacity'
                    src={maganni}
                    alt='Avatar'
                  />
                  <div className='w3-display-bottommiddle w3-large'>
                    <h1>Maganni </h1>
                    <p>Independent Artist</p>
                    <p className='w3-text-yellow'>Raul Estrada</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-3 mb-3'>
            <div className='flip-card'>
              <div className='flip-card-inner'>
                <div className='flip-card-front'>
                  <img className='Avatar' src={NFT6} alt='Avatar' />
                </div>
                <div className='flip-card-back'>
                  <img
                    className='AvatarBack w3-opacity'
                    src={mario}
                    alt='Avatar'
                  />
                  <div className='w3-display-bottommiddle w3-large'>
                    <h1>Mario Paz</h1>
                    <p>Community Development </p>
                    <p className='w3-text-yellow'>Solana specialist</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-3 mb-3'>
            <div className='flip-card'>
              <div className='flip-card-inner'>
                <div className='flip-card-front'>
                  <img className='Avatar' src={NFT7} alt='Avatar' />
                </div>
                <div className='flip-card-back'>
                  <img
                    className='AvatarBack w3-opacity'
                    src={oscar}
                    alt='Avatar'
                  />
                  <div className='w3-display-bottommiddle w3-large'>
                    <h1>Oscar Elizarraras</h1>
                    <p>Content Creator </p>
                    <p className='w3-text-yellow'>Creativity and Narrative</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-3 mb-3'>
            <div className='flip-card'>
              <div className='flip-card-inner'>
                <div className='flip-card-front'>
                  <img className='Avatar' src={Devsity} alt='Avatar' />
                </div>
                <div className='flip-card-back'>
                  <img
                    className='AvatarBack w3-opacity'
                    src={neto}
                    alt='Avatar'
                  />
                  <div className='w3-display-bottommiddle w3-large'>
                    <h1>Ernesto Sosa</h1>
                    <p>Software Developer</p>
                    <p className='w3-text-yellow'>Sosality</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
      </div>
    </div>
  );
}

export default Team;
