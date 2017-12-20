import React from 'react';
import './InputField.css';

export const InputField = props =>
  <div className='columns'>
    <div className='column'>
      <div className='field'>
        <label className='label'>{props.children}</label>
        <div className='control'>
          <input className='input' type={props.children} name={props.children} placeholder={props.children} />
        </div>
      </div>
    </div>
  </div>;

// export default InputField;
