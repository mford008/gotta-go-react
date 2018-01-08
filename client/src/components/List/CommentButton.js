import React from 'react';
import { Column, Columns, Button } from 'bloomer';

export const CommentButton = props =>
  <Columns>
    <Column hasTextAlign='centered'>
      <Button {...props}>{props.children}</Button>
    </Column>
  </Columns>;
