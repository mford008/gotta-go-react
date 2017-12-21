import React from 'react';
import { Field, Label, Control, Input } from 'bloomer';

export const Location = props =>
  <Field>
    <Label>Location</Label>
    <Control>
      <Input {...props} />
    </Control>
  </Field>;
