import React, { Component } from 'react';
import '../Login/Login.css';
import { Header } from '../../components/Header';
import { TabGroup, SingleTab } from '../../components/TabGroup';

class Landing extends Component {
  render () {
    return (
      <div>
        <Header />
        <TabGroup>
          <SingleTab className={'fa-fa-map'}>
            Map
          </SingleTab>
          <SingleTab className='fa-fa-list'>
            List
          </SingleTab>
        </TabGroup>
        <div>
          <h3>Hello teamawesome!</h3>
        </div>
      </div>
    );
  }
}

export default Landing;
