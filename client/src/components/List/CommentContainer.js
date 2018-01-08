import React from 'react';
import { CommentButton, CommentList, CommentItem } from '../List';
import { InputField, Btn } from '../Form';

export const CommentContainer = props =>
  <div>
    <CommentButton />
    <CommentList>
      <CommentItem />
    </CommentList>
    <InputField />
    <Btn />
  </div>;
