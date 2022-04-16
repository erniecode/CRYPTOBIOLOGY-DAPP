import React from 'react';
import { Link } from 'react-router-dom';

const STYLES = ['btn--primary', 'btn--outline'];

const SIZES = ['btn--medium', 'btn--large'];

export const Button = ({
  children,
  disabled,
  type,
  onClick,
  buttonStyle,
  buttonSize,
}: {
  children?: any;
  disabled?: any;
  type?: any;
  onClick?: any;
  buttonStyle?: any;
  buttonSize?: any;
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <Link to='/sign-up' className='btn-mobile'>
      <button
        disabled={disabled}
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={() => onclick}
        type={type}
      >
        {children}
      </button>
    </Link>
  );
};
