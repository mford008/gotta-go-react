import React from 'react';
import { TabLink, Tab, Icon, span } from 'bloomer';

export const SingleTab = props =>
  <Tab>
    <TabLink>
      <Icon isSize='small'><span className={props.children} aria-hidden='true' /></Icon>
      <span>{props.children}</span>
    </TabLink>
  </Tab>;
