import React, { Component } from 'react';
import { Route, Switch , Link } from 'react-router-dom';
import { TabGroup, SingleTab } from '../../components/TabGroup';
import Header from '../../components/Header/Header.js';
import LandingMap from './LandingMap.js';
import LandingList from './LandingList.js';

class Landing extends Component {
  render () {
    return (
      <div>
        <Header />
        <TabGroup>
          <SingleTab link={'/landing/landing-map'} icon={'fa fa-map'}>
            Map
          </SingleTab>
          <SingleTab link={'/landing/landing-list'} icon={'fa fa-list'}>
            List
          </SingleTab>
        </TabGroup>
        <div>
          <Switch>
            <Route path="/landing/landing-map" component={LandingMap} />
            <Route path="/landing/landing-list" component={LandingList} />
          </Switch>
        </div>
      </div>
    )
  }
}

export default Landing;
