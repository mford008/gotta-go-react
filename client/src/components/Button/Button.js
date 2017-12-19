import React from 'react';
import './Button.css';

export const Btn = props =>
  <div>
    <div className='columns'>
      <div className='column has-text-centered'>
        <button className='button'>{props.children}</button>
      </div>
    </div>
  </div>;

// export default Button;
