import React from 'react';

export const CommentButton = props =>
  <div>
    <a {...props}>
      <img style={{ width: '30px' }} className='comment-icon'
        src="./../chat.svg"
      />
    </a>
  </div>
