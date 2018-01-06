import React from 'react';
import { Field, Label, Control, TextArea } from 'bloomer';

export const Comment = ({label, ...props}) => (
  <Field>
    <Label>{label}</Label>
    <Control>
      <TextArea {...props} />
    </Control>
  </Field>
);
