import React from 'react';

export const Title = props =>
  <div className='columns'>
    <div className='column has-text-centered'>
      <h1>{props.children}</h1>
    </div>
  </div>;
