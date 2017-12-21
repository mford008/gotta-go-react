import React from 'react';
import { Field, Label, Control, Select, option } from 'bloomer';

export const Category = props =>
  <Field>
    <Label>Select Category: </Label>
    <Control>
      <Select>
        <option>Gas Station</option>
        <option>Restaurant</option>
        <option>Other</option>
      </Select>
    </Control>
  </Field>;
