import React from 'react';
import { Field, Label, Control, Input } from 'bloomer';

export const UserName = props =>
<Field>
  <Label>Username</Label>
  <Control>
      <Input {...props}></Input>
  </Control>
</Field>;
