import React from 'react';
import { Field, Label, Control, Input } from 'bloomer';

export const Password = props =>
<Field>
  <Label>Password</Label>
  <Control>
      <Input type="text" placeholder='Enter password' />
  </Control>
</Field>;
