import React from 'react';
import { InputField, Btn } from '../Form';

export const CommentContainer = props =>
  <div style={{display: props.isHidden ? 'none' : 'block'}}>
    {props.children}
    <InputField />
    <Btn />
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
