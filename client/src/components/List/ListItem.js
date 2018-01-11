import React from 'react';

export const ListItem = props => (
  <li style={props.style} className="list-group-item tile">
    {props.children}
  </li>
);
