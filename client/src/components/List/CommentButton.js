import React from 'react';

export const CommentButton = props =>
  <div>
    <a {...props}>
      <img style={{ width: '20px' }} alt='...' className='comment-icon'
        src="./../chat.svg"
      />
    </a>
  </div>
