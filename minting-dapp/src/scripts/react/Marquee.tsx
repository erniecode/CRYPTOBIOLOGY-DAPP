import React from 'react';

interface IMarqueeProps {
  text: string;
  side?: string;
}

const Marquee: React.FC<IMarqueeProps> = ({ text, side }) => {
  if (side === 'Left') {
    return (
      <>
        <div className='top-bar diagonalLeft'>
          <div className='marquee-container marPurple'>
            <p className='msg'>
              <span>{text}</span>
            </p>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
      </>
    );
  } else if (side === 'Right') {
    return (
      <>
        <div className='top-bar diagonalRight'>
          <div className='marquee-container marGreen'>
            <p className='msg'>
              <span>{text}</span>
            </p>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
      </>
    );
  } else {
    return (
      <>
        <div className='top-bar'>
          <div className='marquee-container marWhite'>
            <p className='msg'>
              <span>{text}</span>
            </p>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
      </>
    );
  }
};

export default Marquee;
