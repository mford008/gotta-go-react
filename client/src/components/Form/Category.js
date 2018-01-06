import React from 'react';
import { Field, Label, Control, Select, option } from 'bloomer';

export const Category = ({label, ...props}) =>
  <Field>
    <Label>{label}</Label>
    <Control>
      <Select {...props}>
        <option value='Gas Station'>Gas Station</option>
        <option value='Restaurant'>Restaurant</option>
        <option value='Other'>Other</option>
      </Select>
    </Control>
  </Field>;
