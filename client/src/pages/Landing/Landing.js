import React, { Component } from 'react';
import '../Login/Login.css';
import API from '../../utils/API';
import { ListContainer, ListItem, CommentContainer } from "../../components/List";
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
<<<<<<< HEAD
              <a href={'/restroom/' + restroom._id}></a>
              <h2><strong>{restroom.name}</strong></h2>
=======

              <h1><strong>{restroom.name}</strong></h1>

>>>>>>> e4e276c55aeeae538da8e750249722d0bc702eb1
              <h2>{restroom.location} - {restroom.category}</h2>
              <h3>Hours: {restroom.hours}</h3>
              <h3>Rating: {restroom.rating}</h3>
              <CommentContainer>Comments: {console.log(restroom.comments[0])}</CommentContainer>
            </ListItem>
          ))}
          </ListContainer>
      </div>
    );
  }
}

export default Landing;
