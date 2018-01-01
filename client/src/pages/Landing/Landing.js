import React, { Component } from 'react';
import '../Login/Login.css';
import API from '../../utils/API';
import { ListContainer, ListItem, CommentContainer, CommentItem } from "../../components/List";
import { Header } from '../../components/Header';
import { TabGroup, SingleTab } from '../../components/TabGroup';

class Landing extends Component {
  state = {
    // since the mongoose call returns an array of all the restrooms in the DB,
    // we can store them in an array and use the .map function to get info from
    // every item in the respone (res.data)
    restroomList: []
    // commentList: []
  }

  componentDidMount () {
    API.loadRestrooms()
    // .then(res => console.log(res.data))
    .then(res => this.setState({ restroomList: res.data }))
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
          <SingleTab className='fa-fa-map'>
            Map
          </SingleTab>
          <SingleTab className='fa-fa-list'>
            List
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
                {restroom.comments.map(comments =>
                  (comments.ref)
                )}
            </ListItem>
          ))}
        </ListContainer>

      </div>
    );
  }
}

export default Landing;
