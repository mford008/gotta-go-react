import React from 'react';
import { Field, Label, Control, TextArea } from 'bloomer';
import { Btn } from '../../components/Form'; //use bloomer button

export const Comment = ({label, ...props, restroom, onSubmit}) => {
  const handleSubmit = (comment) => {
    console.log(comment);
    onSubmit(restroom, "comment");
  };
  return (
    <div>
      <Field>
        <Label>{label}</Label>
        <Control>
          <TextArea {...props} />  // Consider a form element instead
        </Control>
      </Field>
      <Btn onClick={handleSubmit}> Add Comment </Btn>
    </div>
  )
};
