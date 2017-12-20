import React from 'react';

export const Btn = props =>
  <div className='columns'>
    <div className='column has-text-centered'>
      <button className='button'>{props.children}</button>
    </div>
  </div>;

// export default Button;
