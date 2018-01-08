import React, { Component } from 'react';
import '../Login/Login.css';
import API from '../../utils/API';
import { ListContainer, ListItem, CommentContainer, CommentItem } from "../../components/List";
import Header from '../../components/Header/Header.js';
import { Link } from 'react-router-dom';
import { TabGroup, SingleTab } from '../../components/TabGroup';

class LandingList extends Component {
  state = {
    restroomList: [],
    currID: 0,
    comment: ''
  }

  componentDidMount () {
    API.loadRestrooms()
    .then(res => this.setState({ restroomList: res.data }))
  }

  restroomLink = string => {
    let link = "https://www.google.com/maps/place/";
    link += string;
    return link;
  }

  // handleCommentToggle = event => {
  //   event.preventDefault();
  //   this.setState({currID: value})
  // }

  handleCommentSubmit = event => {
    event.preventDefault();
    API.newComment(this.state.currID, this.state.comment)
    .then(res => console.log({ results: res.data }))
    .catch(err => console.log(err))
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  render () {
    console.log(this.state.currentLocation);
    return (
      <div>
        <ListContainer>
          {this.state.restroomList.map(restroom => (
            <ListItem key={restroom._id}>
              <a href={'/restroom/' + restroom._id}>
              <h1><strong>{restroom.name}</strong></h1></a>
              <h3>
                <a href={this.restroomLink(restroom.location)}>
                  {restroom.location}
                </a>
              </h3>
              <h2>{restroom.category}</h2>
              <h4><strong>Comments:</strong> {restroom.comments.map(comments =>
                (comments.comment)
              )}</h4>
            </ListItem>
          ))}
        </ListContainer>

      </div>
    );
  }
}

export default LandingList;
