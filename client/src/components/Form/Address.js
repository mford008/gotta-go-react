import React from 'react';
import { Field, Label, Control, Input } from 'bloomer';

export const Address = props =>
  <Field>
    <Label>Address</Label>
    <Control>
      <Input {...props} />
    </Control>
  </Field>;
// TODO: How can we incorporate Google Maps auto-complete here?
