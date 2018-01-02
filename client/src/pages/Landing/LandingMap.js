import React, { Component } from 'react';
import '../Login/Login.css';
import API from '../../utils/API';
// import { ListContainer, ListItem, CommentContainer, CommentItem } from "../../components/List";
import { Header } from '../../components/Header';
import { Map } from '../../components/Map';
import { Link } from 'react-router-dom';
import { TabGroup, SingleTab } from '../../components/TabGroup';

class LandingMap extends Component {
  state = {
    // since the mongoose call returns an array of all the restrooms in the DB,
    // we can store them in an array and use the .map function to get info from
    // every item in the respone (res.data)
    restroomList: []
    // commentList: []
  }

  componentDidMount () {
    API.loadRestrooms()
    .then(res => console.log(res.data))
    // .then(res => this.setState({ restroomList: res.data }))
    .catch(err => console.log(err))

    // API.loadComments()
    // .then(res => this.setState({ commentList: res.data }))
    // .then(console.log('comment test'))
    // .catch(err => console.log(err));
  }

  render () {
    return (
      <div>
        <Header />
        <TabGroup>
          <SingleTab icon={'fa fa-map'}>
            <Link to={'/landing-map'} style={{ padding: '0' }}>
              Map
            </Link>
          </SingleTab>
          <SingleTab icon={'fa fa-list'}>
            <Link to={'/landing'} style={{ padding: '0' }}>
              List
            </Link>
          </SingleTab>
        </TabGroup>
        <Map />
      </div>
    );
  }
}

export default LandingMap;
