import React from 'react';

interface IMarqueeProps {
  text: string;
  side?: string;
  icon?: string;
}

const Marquee: React.FC<IMarqueeProps> = ({ text, side, icon }) => {
  //Here propose  the times you want to repeat the text
  const repeat = 20;
  if (side === 'Left') {
    return (
      <>
        <br />
        <br />
        <br />
        <div className='top-bar diagonalLeft'>
          <div className='marquee-container marPurple'>
            <p className='msg'>
              <span>
                {Array.from({ length: repeat }, (_, i) => (
                  <>
                    <i className={icon}></i>
                    {text}
                  </>
                ))}
              </span>
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
        <br />
        <br />
        <br />
        <div className='top-bar diagonalRight'>
          <div className='marquee-container marGreen'>
            <p className='msg'>
              <span>
                {Array.from({ length: repeat }, (_, i) => (
                  <>
                    <i className={icon}></i>
                    {text}
                  </>
                ))}
              </span>
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
        <br />
        <br />
        <br />
        <div className='top-bar'>
          <div className='marquee-container marWhite'>
            <p className='msg'>
              <span>
                {Array.from({ length: repeat }, (_, i) => (
                  <>
                    <i className={icon}></i>
                    {text}
                  </>
                ))}
              </span>
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
