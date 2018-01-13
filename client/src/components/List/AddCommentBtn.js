import React from 'react';
import { Btn } from '../../components/Form';

export const AddCommentBtn = props =>
  <div>
    <Btn {...props}
      style={{
      border: 'none',
      width: 'auto',
      height: 'auto',
      padding: '5px 10px',
      margin: '0',
      fontSize: '14px',
    }}/>
  </div>;
