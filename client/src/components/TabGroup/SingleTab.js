import React from 'react';
import { TabLink, Tab, Icon, span } from 'bloomer';

export const SingleTab = props =>
  <Tab>
    <TabLink href={props.link}>
      <Icon isSize='small'>
        <span className={props.icon} aria-hidden='true' style={{ color: '#393f60' }} />
      </Icon>
      <span>{props.children}</span>
    </TabLink>
  </Tab>;
