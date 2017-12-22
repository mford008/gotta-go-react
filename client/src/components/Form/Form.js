import React from 'react';
import { Column, Columns } from 'bloomer';

export const Form = props => (
  <Columns>
    <Column>
      {props.children}
    </Column>
  </Columns>
);
