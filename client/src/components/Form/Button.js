import React from 'react';
import { Column, Columns, Button } from 'bloomer';

export const Btn = props =>
  <Columns>
    <Column hasTextAlign='centered'>
        <Button>{props.children}</Button>
    </Column>
  </Columns>;
