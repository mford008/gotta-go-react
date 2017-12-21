import React from 'react';
import { Field, Label, Control, Input } from 'bloomer';

export const UserName = props =>
<Field>
  <Label>Username</Label>
  <Control>
      <Input type="text" placeholder='Enter username' />
  </Control>
</Field>;
