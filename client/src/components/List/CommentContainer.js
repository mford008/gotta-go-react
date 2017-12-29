import React from 'react';

export const CommentContainer = props =>
  <div>
    <p className="list-comment-item" style={{ color: '#393f60' }}>
      {props.children}
    </p>
  </div>;
