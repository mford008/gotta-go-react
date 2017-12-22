import React from 'react';
import { Field, Label, Control, TextArea } from 'bloomer';

export const Comment = () => (
  <Field>
    <Label>Comment (optional)</Label>
    <Control>
      <TextArea placeholder={'Leave comment here'} />
    </Control>
  </Field>
);
