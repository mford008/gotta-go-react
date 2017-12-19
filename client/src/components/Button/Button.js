import React from 'react';
import './Button.css';

const Button = props =>
  <div class="columns">
      <div class="column has-text-centered">
        <button class="button">{props}</button>
      </div>
  </div>;

export default Button;
