import React from 'react';

export const CommentContainer = ({ children }) =>
  <div>
    <ul className="list-comment-item" style={{ color: '#393f60' }}>
      { children }
    </ul>
  </div>;
