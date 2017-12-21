import React from 'react';
import { Field, Label, Control, Input } from 'bloomer';

export const Password = props =>
<Field>
  <Label>Password</Label>
  <Control>
      <Input {...props} />
  </Control>
</Field>;
