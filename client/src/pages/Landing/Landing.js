import React, { Component } from 'react';
import '../Login/Login.css';
import API from '../../utils/API';
import { ListContainer, ListItem, CommentContainer, CommentItem } from "../../components/List";
import { Header } from '../../components/Header';
import { Link } from 'react-router-dom';
import { TabGroup, SingleTab } from '../../components/TabGroup';

class Landing extends Component {
  state = {
    restroomList: []
  }

  componentDidMount () {
    API.loadRestrooms()
    // .then(res => console.log(res.data))
    .then(res => this.setState({ restroomList: res.data }))
    .catch(err => console.log(err))
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
        <ListContainer>
          {this.state.restroomList.map(restroom => (
            <ListItem key={restroom._id}>
              <a href={'/restroom/' + restroom._id}>
              <h1><strong>{restroom.name}</strong></h1></a>
              <h2>{restroom.location} - {restroom.category}</h2>
              <h3>Hours: {restroom.hours}</h3>
              <h3>Rating: {restroom.rating}</h3>
              <h4><strong>Comments:</strong> {restroom.comments.map(comments =>
                (comments.ref)
              )}</h4>
            </ListItem>
          ))}
        </ListContainer>

      </div>
    );
  }
}

export default Landing;
