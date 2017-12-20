import React from 'react';

export const InputField = props =>
      <div>
        <label className="label">{props.children}</label>
        <div className="control">
          <input className="input" type={props.children} name={props.children} placeholder={props.children}/>
        </div>
      </div>

// export default InputField;
