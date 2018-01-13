import React from 'react';
import { Btn } from '../../components/Form';

export const CommentButton = props =>
  <div>
    <Btn {...props}
      style={{
        backgroundColor: 'transparent',
        border: 'none',
        backgroundImage: 'url(./../speech-bubble-with-dots.png)',
        backgroundSize: 'cover',
        width: '35px',
        height: '35px',
        padding: '0'
      }}
      />
  </div>;
