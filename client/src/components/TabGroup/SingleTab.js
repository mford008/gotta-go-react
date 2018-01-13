import React from 'react';
import { Link } from 'react-router-dom';
import { Tab, Icon, span } from 'bloomer';

export const SingleTab = props =>
  <Tab>
    <Link to={props.link}>
      <Icon isSize='small'>
        <span className={props.icon} aria-hidden='true' style={{ color: '#393f60' }} />
      </Icon>
      <span>{props.children}</span>
    </Link>
  </Tab>;
