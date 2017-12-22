import React from 'react';
import { Field, Label, Control, Input } from 'bloomer';

export const InputField = ({ label, ...props }) => (
  <Field>
    <Label>{label}</Label>
    <Control>
        <Input {...props}></Input>
    </Control>
  </Field>
);
