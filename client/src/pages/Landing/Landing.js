import React, { Component } from 'react';
import '../Login/Login.css';
import API from '../../utils/API';
import { Header } from '../../components/Header';
import { TabGroup, SingleTab } from '../../components/TabGroup';

class Landing extends Component {
  state = {
    // since the mongoose call returns an array of all the restrooms in the DB,
    // we can store them in an array and use the .map function to get info from
    // every item in the respone (res.data)
    restroomList: []
  }

  componentDidMount () {
    API.loadRestrooms()
    .then(res => this.setState({ restroomList: res.data }))
    .catch(err => console.log(err));
  }

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
        <br />
        <div>
          {this.state.restroomList.map(restroom => (
            <h3 key={restroom._id}>{restroom.name}</h3>
          ))}
        </div>
      </div>
    );
  }
}

export default Landing;
