import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { TabGroup, SingleTab } from '../../components/TabGroup';
import Header from '../../components/Header/Header.js';
import LandingMap from './LandingMap.js';
import LandingList from './LandingList.js';


class Landing extends Component {
  state = {

  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(pos => {
      const coords = pos.coords;
      if (this.state !== coords) {
        this.setState({coords})
        localStorage.setItem('lat', this.state.coords.latitude)
        localStorage.setItem('lng', this.state.coords.longitude)
        console.log(this.state);
        console.log(localStorage);
      }
   })
  }

  render () {
    return (
      <div>
        <Header />
        <TabGroup>
          <SingleTab link={'/landing/map'} icon={'fa fa-map'}>
            Map
          </SingleTab>
          <SingleTab link={'/landing/list'} icon={'fa fa-list'}>
            List
          </SingleTab>
        </TabGroup>
        <div>
          <Switch>
            <Route path="/landing/map" component={LandingMap} />
            <Route exact path="/landing/list" component={LandingList} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default Landing;
