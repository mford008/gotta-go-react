import React from 'react';
import './InputField.css';

const InputField = props =>
  <div className="columns">
    <div className="column">
      <div className="field">
        <label className="label">{props}</label>
        <div className="control">
          <input className="input" type={props} name={props} placeholder={props}>
        </div>
      </div>
    </div>
  </div>;

export default InputField;
