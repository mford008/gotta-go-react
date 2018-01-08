import React from 'react';

export const CommentContainer = props =>
  <div style={{display: props.isHidden ? 'none' : 'block'}}>
    {props.children}
  </div>;

  // export const CommentContainer = props =>
  //   <div>
  //     <Btn />
  //     <CommentList>
  //       <CommentItem />
  //     </CommentList>
  //     <InputField />
  //     <Btn />
  //   </div>;
