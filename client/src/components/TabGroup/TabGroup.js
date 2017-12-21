import React from 'react';
import { Tabs, TabList } from 'bloomer';

export const TabGroup = props =>
  <Tabs isBoxed isFullWidth>
    <TabList>
      {props.children}
    </TabList>
  </Tabs>;
