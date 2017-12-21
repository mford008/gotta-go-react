import React from 'react';
import { Field, Label, Control, TextArea } from 'bloomer';

export const Comment = props =>
  <Field>
    <Label>Comment</Label>
    <Control>
      <TextArea placeholder={'TextArea'} />
    </Control>
  </Field>;
