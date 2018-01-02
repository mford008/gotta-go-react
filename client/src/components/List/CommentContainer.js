import React from 'react';

export const CommentContainer = ({ ...comment }) =>
  <div>
    <ul className="list-comment-item" style={{ color: '#393f60' }}>
      { comment }
    </ul>
  </div>;
