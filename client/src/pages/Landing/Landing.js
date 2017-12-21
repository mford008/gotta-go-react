import React, { Component } from 'react';
import "../Login/Login.css";
import { Header, Plus, NavLogo, NavMenu } from '../../components/Header';
import { TabGroup, SingleTab } from '../../components/TabGroup';

// import { Link } from 'react-router-dom';

class Landing extends Component {
  render () {
    return (
      <div>
        <Header>
          <Plus/>
          <NavLogo/>
          <NavMenu/>
        </Header>
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
